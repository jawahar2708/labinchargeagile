const fs = require('fs');
const path = require('path');

const emojis = {
    '<i data-lucide=\"package\"></i>': 'package',
    '<i data-lucide=\"triangle-alert\"></i>': 'triangle-alert',
    '<i data-lucide=\"clipboard-list\"></i>': 'clipboard-list',
    '<i data-lucide=\"check-circle\"></i>': 'check-circle',
    '<i data-lucide=\"corner-down-left\"></i>': 'corner-down-left',
    '<i data-lucide=\"wrench\"></i>': 'wrench',
    '<i data-lucide=\"ticket\"></i>': 'ticket',
    '<i data-lucide=\"users\"></i>': 'users',
    '<i data-lucide=\"monitor\"></i>': 'monitor',
    '<i data-lucide=\"trending-down\"></i>': 'trending-down',
    '<i data-lucide=\"user\"></i>': 'user',
    '<i data-lucide=\"search\"></i>': 'search',
    '<i data-lucide=\"bell\"></i>': 'bell',
    '<i data-lucide=\"clock\"></i>': 'clock',
    '<i data-lucide=\"file-text\"></i>': 'file-text',
    '<i data-lucide=\"hourglass\"></i>': 'hourglass',
    '<i data-lucide=\"alarm-clock\"></i>': 'alarm-clock',
    '<i data-lucide=\"check\"></i>': 'check',
    '<i data-lucide=\"triangle-alert\"></i>': 'triangle-alert',
    '<i data-lucide=\"info\"></i>': 'info',
    '<i data-lucide=\"info\"></i>': 'info',
    '<i data-lucide=\"x\"></i>': 'x',
    '<i data-lucide=\"triangle-alert\"></i>': 'triangle-alert',
    '<i data-lucide=\"corner-down-left\"></i>': 'corner-down-left'
};

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (!['node_modules', '.git'].includes(file)) {
                processDirectory(fullPath);
            }
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            const isJS = fullPath.endsWith('.js');
            
            for (const [emoji, iconName] of Object.entries(emojis)) {
                if (content.includes(emoji)) {
                    // In JS, escape the double quotes so it works inside both ' and " strings
                    const replacement = isJS 
                        ? `<i data-lucide=\\"${iconName}\\"></i>` 
                        : `<i data-lucide="${iconName}"></i>`;
                    
                    content = content.split(emoji).join(replacement);
                    modified = true;
                }
            }
            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDirectory(__dirname);
