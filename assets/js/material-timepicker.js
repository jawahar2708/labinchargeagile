/* ============================================================
   material-timepicker.js
   Custom zero-dependency Material Design Time Picker
   ============================================================ */

class MaterialTimePicker {
    constructor(selector) {
        this.inputs = document.querySelectorAll(selector);
        this.currentInput = null;
        this.mode = 'hour'; // 'hour' or 'minute'
        this.hour = 12;
        this.minute = 0;
        this.ampm = 'AM';
        
        this.init();
    }

    init() {
        this.createDialog();
        this.bindInputs();
    }

    createDialog() {
        if (document.getElementById('mtpOverlay')) return;

        const html = `
            <div class="mtp-overlay" id="mtpOverlay">
                <div class="mtp-dialog">
                    <div class="mtp-header">
                        <div class="mtp-time">
                            <span id="mtpHour" class="mtp-active">12</span>:<span id="mtpMinute">00</span>
                        </div>
                        <div class="mtp-ampm">
                            <span id="mtpAM" class="mtp-active">AM</span>
                            <span id="mtpPM">PM</span>
                        </div>
                    </div>
                    <div class="mtp-body">
                        <div class="mtp-clock" id="mtpClock">
                            <div class="mtp-clock-center"></div>
                            <div class="mtp-hand" id="mtpHand"></div>
                            <div id="mtpNumbers"></div>
                        </div>
                    </div>
                    <div class="mtp-actions">
                        <button class="mtp-btn" id="mtpCancel">Cancel</button>
                        <button class="mtp-btn" id="mtpOk">OK</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);

        this.overlay = document.getElementById('mtpOverlay');
        this.hourEl = document.getElementById('mtpHour');
        this.minuteEl = document.getElementById('mtpMinute');
        this.amEl = document.getElementById('mtpAM');
        this.pmEl = document.getElementById('mtpPM');
        this.clock = document.getElementById('mtpClock');
        this.hand = document.getElementById('mtpHand');
        this.numbersContainer = document.getElementById('mtpNumbers');

        // Bind dialog events
        this.hourEl.addEventListener('click', () => this.setMode('hour'));
        this.minuteEl.addEventListener('click', () => this.setMode('minute'));
        this.amEl.addEventListener('click', () => this.setAMPM('AM'));
        this.pmEl.addEventListener('click', () => this.setAMPM('PM'));
        
        this.clock.addEventListener('mousedown', (e) => this.handleClockClick(e));
        this.clock.addEventListener('touchstart', (e) => this.handleClockClick(e.touches[0]), {passive: true});
        
        // Drag events for clock
        let isDragging = false;
        this.clock.addEventListener('mousedown', () => isDragging = true);
        document.addEventListener('mouseup', () => isDragging = false);
        this.clock.addEventListener('mousemove', (e) => {
            if (isDragging) this.handleClockClick(e, true);
        });
        
        this.clock.addEventListener('touchstart', () => isDragging = true, {passive: true});
        document.addEventListener('touchend', () => isDragging = false);
        this.clock.addEventListener('touchmove', (e) => {
            if (isDragging) this.handleClockClick(e.touches[0], true);
        }, {passive: true});

        document.getElementById('mtpCancel').addEventListener('click', () => this.close());
        document.getElementById('mtpOk').addEventListener('click', () => this.save());
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.close();
        });
    }

    bindInputs() {
        this.inputs.forEach(input => {
            // Check if already wrapped
            if (!input.parentElement.classList.contains('mtp-input-wrapper')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'mtp-input-wrapper';
                input.parentNode.insertBefore(wrapper, input);
                wrapper.appendChild(input);

                // Add clock icon
                const icon = document.createElement('div');
                icon.className = 'mtp-input-icon';
                icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>';
                wrapper.appendChild(icon);
            }

            input.readOnly = true;
            input.style.cursor = 'pointer';
            input.addEventListener('click', () => this.open(input));
        });
    }

    parseTime(val) {
        if (!val) return;
        // Handle HH:MM AM/PM format
        const match = val.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
        if (match) {
            let h = parseInt(match[1]);
            this.minute = parseInt(match[2]);
            this.ampm = match[3] ? match[3].toUpperCase() : 'AM';
            
            // Convert 24h to 12h if necessary
            if (!match[3]) {
                if (h >= 12) {
                    this.ampm = 'PM';
                    if (h > 12) h -= 12;
                } else if (h === 0) {
                    h = 12;
                    this.ampm = 'AM';
                }
            }
            this.hour = h;
        }
    }

    open(input) {
        this.currentInput = input;
        
        // Default time
        const now = new Date();
        let h = now.getHours();
        this.ampm = h >= 12 ? 'PM' : 'AM';
        this.hour = h % 12 || 12;
        this.minute = now.getMinutes();

        if (input.value) {
            this.parseTime(input.value);
        }

        this.updateHeader();
        this.setMode('hour');
        this.overlay.classList.add('mtp-show');
    }

    close() {
        this.overlay.classList.remove('mtp-show');
    }

    save() {
        if (this.currentInput) {
            const h = this.hour.toString().padStart(2, '0');
            const m = this.minute.toString().padStart(2, '0');
            this.currentInput.value = `${h}:${m} ${this.ampm}`;
            
            // Trigger change event for any listeners
            this.currentInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        this.close();
    }

    setMode(mode) {
        this.mode = mode;
        this.hourEl.classList.toggle('mtp-active', mode === 'hour');
        this.minuteEl.classList.toggle('mtp-active', mode === 'minute');
        this.renderNumbers();
        this.updateHand();
    }

    setAMPM(val) {
        this.ampm = val;
        this.amEl.classList.toggle('mtp-active', val === 'AM');
        this.pmEl.classList.toggle('mtp-active', val === 'PM');
    }

    updateHeader() {
        this.hourEl.textContent = this.hour.toString().padStart(2, '0');
        this.minuteEl.textContent = this.minute.toString().padStart(2, '0');
        this.setAMPM(this.ampm);
    }

    renderNumbers() {
        this.numbersContainer.innerHTML = '';
        const radius = 100;
        const center = 125;
        
        const items = this.mode === 'hour' ? 12 : 12; // 12 numbers for both (1-12 or 0-55 by 5s)
        
        for (let i = 1; i <= items; i++) {
            const num = document.createElement('div');
            num.className = 'mtp-number';
            
            let val;
            if (this.mode === 'hour') {
                val = i;
                if (val === this.hour) num.classList.add('mtp-active');
            } else {
                val = (i === 12 ? 0 : i * 5);
                if (val === this.minute || (this.minute % 5 !== 0 && val === Math.round(this.minute/5)*5)) {
                    // Only highlight exact match or closest 5 if we want, but usually hand covers it
                }
            }
            
            num.textContent = this.mode === 'hour' ? val : val.toString().padStart(2, '0');
            
            // Angle in radians (start at 12 o'clock = -90 deg = -PI/2)
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);
            
            num.style.left = `${x}px`;
            num.style.top = `${y}px`;
            
            // Exact minute match highlight
            if (this.mode === 'minute' && val === this.minute) {
                num.classList.add('mtp-active');
            }
            
            this.numbersContainer.appendChild(num);
        }
    }

    updateHand() {
        let angle;
        if (this.mode === 'hour') {
            angle = (this.hour / 12) * 360;
        } else {
            angle = (this.minute / 60) * 360;
        }
        this.hand.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    }

    handleClockClick(e, isDrag = false) {
        const rect = this.clock.getBoundingClientRect();
        const center = { x: rect.width / 2, y: rect.height / 2 };
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate angle from 12 o'clock
        let angle = Math.atan2(y - center.y, x - center.x) * (180 / Math.PI) + 90;
        if (angle < 0) angle += 360;
        
        if (this.mode === 'hour') {
            // 30 degrees per hour
            let h = Math.round(angle / 30);
            if (h === 0) h = 12;
            this.hour = h;
            this.updateHeader();
            this.renderNumbers();
            this.updateHand();
            
            // Switch to minute after selection (if not dragging)
            if (!isDrag) {
                setTimeout(() => this.setMode('minute'), 300);
            }
        } else {
            // 6 degrees per minute
            let m = Math.round(angle / 6);
            if (m === 60) m = 0;
            this.minute = m;
            this.updateHeader();
            this.renderNumbers();
            this.updateHand();
        }
    }
}

// Auto-initialize if exposed globally
window.initMaterialTimePicker = (selector) => {
    return new MaterialTimePicker(selector);
};
