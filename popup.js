document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('grabIdToken');
    checkPageButton.addEventListener('click', async function() {
        // Get the current tab
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        const tab = tabs[0]; 

        // Execute script in the current tab
        const key = 'CognitoIdentityServiceProvider.6ah99cfssnhfikn6oe5b5b3o0k.3c155f5f-2d88-4318-a834-55676870aad4.idToken'
        const fromPageLocalStore = await chrome.tabs.executeScript(tab.id, { code: `localStorage['${key}']` });

        var idToken = document.createElement("textarea");
        idToken.value = fromPageLocalStore
        alert(fromPageLocalStore)
        idToken.select();
        document.execCommand('copy')
        document.body.removeChild(idToken);
    }, false);
  }, false);
  