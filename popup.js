document.getElementById('autofillButton').addEventListener('click', function() {
    const selectedProduct = document.getElementById('productSelect').value;
  
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: autofillForm,
        args: [selectedProduct]  // Der ausgewählte Wert wird als Argument übergeben
      });
    });
  });
  
  function autofillForm(selectedProduct) {
    const data = {
      "toData.addressData.contactName": "David Maciol",
      "billingData.referenceData.purchaseOrderNumber": "Pro Gamersware",
      "billingData.rmaNumber": "Endgame Gear",
      "toData.addressData.addressLine2": "Endgame Gear",
      "psdData.returnLabelType": "PRINT",
      "psdData.mpsRowDataList[0].weight": "1",
      "psdData.serviceType": "FedEx Ground",
      "psdData.mpsRowDataList[0].mpsDimensionSelect": "9010394", 
      "billingData.referenceData.yourReference": selectedProduct  
    };
  
    for (let field in data) {
      let element = document.querySelector(`[name='${field}']`);
      if (element) {
        element.value = data[field];
        element.dispatchEvent(new Event('change'));
      }
    }
  }
  