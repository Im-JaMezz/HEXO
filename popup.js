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
    const colorPicker = document.getElementById('color-picker');
  
    generateButton.addEventListener('click', function() {
      const hexValue = colorInput.value;
      generateImage(hexValue);
    });

    colorPicker.addEventListener('change', function() {
      const selectedColor = colorPicker.value;
      colorInput.value = selectedColor;
    });

    colorInput.addEventListener('input', function() {
      const colorValue = colorInput.value;
      colorPicker.value = colorValue;
    });
});
