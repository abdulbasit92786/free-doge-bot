// referral.js
function getReferralId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('ref');
}

function storeReferral(referralId) {
    if (referralId) {
        localStorage.setItem('referralId', referralId);
    }
}

const refId = getReferralId();
storeReferral(refId);
