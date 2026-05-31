
            const input = document.getElementById('json-input');
            const output = document.getElementById('json-output');
            
            document.getElementById('btn-format').addEventListener('click', () => {
                try {
                    const parsed = JSON.parse(input.value);
                    output.innerHTML = `<span style="color: #39ff14;">✓ Valid JSON</span>\n\n` + JSON.stringify(parsed, null, 2);
                } catch(e) {
                    output.innerHTML = `<span style="color: #ff3366;">✗ Invalid JSON: ${e.message}</span>`;
                }
            });
            
            document.getElementById('btn-minify').addEventListener('click', () => {
                try {
                    const parsed = JSON.parse(input.value);
                    output.innerHTML = `<span style="color: #39ff14;">✓ Valid JSON</span>\n\n` + JSON.stringify(parsed);
                } catch(e) {
                    output.innerHTML = `<span style="color: #ff3366;">✗ Invalid JSON: ${e.message}</span>`;
                }
            });
        