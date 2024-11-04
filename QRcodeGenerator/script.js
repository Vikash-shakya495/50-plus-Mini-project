  function generateQRCode() {
    const qrCodeContainer = document.getElementById('qrCode');
    qrCodeContainer.innerHTML = ''; // Clear any existing QR code

    const text = document.getElementById('textInput').value;
    if (!text) return alert('Please enter some text to generate a QR code.');

    new QRCode(qrCodeContainer, {
      text: text,
      width: 200,
      height: 200,
    });
  }