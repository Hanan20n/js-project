document.getElementById('certForm').addEventListener('submit', function(e) {
    e.preventDefault();

   
    const magaca = document.getElementById('name').value.trim();
    const telefoonka = document.getElementById('phone').value.trim();
    const shahaadada = document.getElementById('course').value;
    const status = document.getElementById('statusMessage');

    
    const magacRegex = /^[a-zA-Z\s]+$/; 
    const magacWaaQalad = !magacRegex.test(magaca) || magaca === "";
    const telWaaQalad = isNaN(telefoonka) || telefoonka.length < 7 || telefoonka === "";

    status.classList.remove('hidden');

   
    
   
    if (magacWaaQalad && telWaaQalad) {
        status.style.background = "#f8d7da";
        status.style.color = "#721c24";
        status.innerHTML = "⚠️ Khalad: Labada dhinacba (Magaca iyo Telefoonka) qalad ayaa ka jira, fadlan sax.";
    } 
    
    else if (magacWaaQalad) {
        status.style.background = "#f8d7da";
        status.style.color = "#721c24";
        status.innerHTML = "⚠️ Khalad: Magaca qalad ayaa ka jira. Fadlan isticmaal xarfo kaliya.";
    } 
   
    else if (telWaaQalad) {
        status.style.background = "#f8d7da";
        status.style.color = "#721c24";
        status.innerHTML = "⚠️ Khalad: Nambarka telefoonka qalad ayaa ka jira. Fadlan geli nambar sax ah.";
    } 
  
    else {
        status.style.background = "#d4edda";
        status.style.color = "#155724";
        status.innerHTML = `✅ Mahadsanid <strong>${magaca}</strong>. Dalabkaaga <strong>${shahaadada}</strong> si guul ah ayaa loo qabtay.`;
        
        
        console.log("Xogta la keydiyey:", { magaca, telefoonka, shahaadada });

        
        setTimeout(() => { this.reset(); }, 2000);
    }
});