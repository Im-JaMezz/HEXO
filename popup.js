function generateImage(hexValue) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 1080;
    canvas.height = 1080;
    context.fillStyle = hexValue;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    const link = document.createElement('a');
    link.href = canvas.toDataURL(); 
    link.download = `HEXO_${hexValue}.png`; 
    link.click();
};  
  
document.addEventListener('DOMContentLoaded', function() {
    const colorInput = document.getElementById('color-input');
    const generateButton = document.getElementById('generate-button');
  
    generateButton.addEventListener('click', function() {
      const hexValue = colorInput.value;
      generateImage(hexValue);
    });
});
  