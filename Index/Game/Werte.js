import { Quests } from "./Quests.js";

export let AdminMode = {
  Admin: parseInt(localStorage.getItem('Admin')) || 0
}

export let Soundset = {
  SoundState: localStorage.getItem('SoundState') || "off"
}

export function SetSoundState(newState){
  Soundset.SoundState = newState;
  localStorage.setItem('SoundState', Soundset.SoundState);
}

export let values = {
  Charisma: parseInt(localStorage.getItem('Charisma')) || 0,
  username: localStorage.getItem('username') || "Fremder",
  Name_abgefragt: parseInt(localStorage.getItem('Name_abgefragt')) || 0,
  Geschlecht: parseInt(localStorage.getItem('Geschlecht')) || ""
};

export function increaseCharisma(increaseBy) {
  values.Charisma += increaseBy;
  // Hier die Werte in localStorage speichern
  localStorage.setItem('Charisma', values.Charisma);
}
export function setCharisma(setas) {
 values.Charisma = setas;
localStorage.setItem('Charisma', values.Charisma);
}

export function setUsername(newUsername) {
  values.username = newUsername;
  // Hier die Werte in localStorage speichern
  localStorage.setItem('username', values.username);
}

export function AbfrageName() {
  values.Name_abgefragt = 1;
  // Hier die Werte in localStorage speichern
  localStorage.setItem('Name_abgefragt', values.Name_abgefragt);
}

export function Geschlechtchange(Geschlecht){
  values.Geschlecht = Geschlecht;
  localStorage.setItem('Geschlecht', values.Geschlecht);
}

export function resetvalues(){
  values.Name_abgefragt = 0;
  values.Charisma = 0;
  values.username = "Fremder";
  values.Geschlecht = "";
  Standorte.Startpunkt = 0;
  Standorte.Stadt = 0;
  Standorte.Taverne = 0;
  Standorte.TorbogenWest = 0;
  Quests.StartAdventure = 0,
  Quests.Questblock1 = 0;
  Quests.Questblock2 = 0;
  Admin = 0;
  InhaltBoxes.Box1 = 0;
  InhaltBoxes.Box2 = 0;
  InhaltBoxes.Box3 = 0; 
  Soundset.SoundState = "off";

  localStorage.setItem('Name_abgefragt', values.Name_abgefragt);
  localStorage.setItem('Charisma', values.Charisma);
  localStorage.setItem('username', values.username);
  localStorage.setItem('Geschlecht', values.Geschlecht);
  localStorage.setItem('Startpunkt', Standorte.Startpunkt);
  localStorage.setItem('Stadt', Standorte.Stadt);
  localStorage.setItem('Taverne', Standorte.Taverne);
  localStorage.setItem('TorbogenWest', Standorte.TorbogenWest);
  localStorage.setItem('StartAdventure', Quests.StartAdventure);
  localStorage.setItem('Questblock1', Quests.Questblock1);
  localStorage.setItem('Questblock2', Quests.Questblock2);
  localStorage.setItem('Admin', AdminMode.Admin);
  localStorage.setItem('Box1', InhaltBoxes.Box1);
  localStorage.setItem('Box2', InhaltBoxes.Box2);
  localStorage.setItem('Box3', InhaltBoxes.Box3);
  localStorage.setItem('SoundState', Soundset.SoundState);
}
export let Standorte = { 
Startpunkt: parseInt(localStorage.getItem('Startpunkt')) || 1,
Stadt: parseInt(localStorage.getItem('Stadt')) || 0,
Taverne: parseInt(localStorage.getItem('Taverne')) || 0,
TorbogenWest: parseInt(localStorage.getItem('TorbogenWest')) || 0,
TorbogenOst: parseInt(localStorage.getItem('TorbogenOst')) || 0
}

export function changeStandort(Ort) {
  // Überprüfen, welche Variable übergeben wurde und entsprechend setzen
  if (Ort === "Startpunkt") {
    Standorte.Startpunkt = 1;
    Standorte.Stadt = 0;
    Standorte.Taverne = 0;
    Standorte.TorbogenWest = 0;
    Standorte.TorbogenOst = 0;
    localStorage.setItem('Startpunkt', Standorte.Startpunkt);
    localStorage.setItem('Stadt', Standorte.Stadt);
    localStorage.setItem('Taverne', Standorte.Taverne);
    localStorage.setItem('TorbogenWest', Standorte.TorbogenWest);
    localStorage.setItem('TorbogenOst', Standorte.TorbogenOst);

  } else if (Ort === "Stadt") {
    Standorte.Startpunkt = 0;
    Standorte.Stadt = 1;
    Standorte.Taverne = 0;
    Standorte.TorbogenWest = 0;
    Standorte.TorbogenOst = 0;
    localStorage.setItem('Startpunkt', Standorte.Startpunkt);
    localStorage.setItem('Stadt', Standorte.Stadt);
    localStorage.setItem('Taverne', Standorte.Taverne);
    localStorage.setItem('TorbogenWest', Standorte.TorbogenWest);
    localStorage.setItem('TorbogenOst', Standorte.TorbogenOst);

  } else if (Ort === "Taverne") {
    Standorte.Startpunkt = 0;
    Standorte.Stadt = 0;
    Standorte.Taverne = 1;
    Standorte.TorbogenWest = 0;
    Standorte.TorbogenOst = 0;
    localStorage.setItem('Startpunkt', Standorte.Startpunkt);
    localStorage.setItem('Stadt', Standorte.Stadt);
    localStorage.setItem('Taverne', Standorte.Taverne);
    localStorage.setItem('TorbogenWest', Standorte.TorbogenWest);
    localStorage.setItem('TorbogenOst', Standorte.TorbogenOst);
    
  } else if (Ort === "TorbogenWest"){
    Standorte.Startpunkt = 0;
    Standorte.Stadt = 0;
    Standorte.Taverne = 0;
    Standorte.TorbogenWest = 1;
    Standorte.TorbogenOst = 0;
    localStorage.setItem('Startpunkt', Standorte.Startpunkt);
    localStorage.setItem('Stadt', Standorte.Stadt);
    localStorage.setItem('Taverne', Standorte.Taverne);
    localStorage.setItem('TorbogenWest', Standorte.TorbogenWest);
    localStorage.setItem('TorbogenOst', Standorte.TorbogenOst);

  } else if (Ort === "TorbogenOst"){
    Standorte.Startpunkt = 0;
    Standorte.Stadt = 0;
    Standorte.Taverne = 0;
    Standorte.TorbogenWest = 0;
    Standorte.TorbogenOst = 1;
    localStorage.setItem('Startpunkt', Standorte.Startpunkt);
    localStorage.setItem('Stadt', Standorte.Stadt);
    localStorage.setItem('Taverne', Standorte.Taverne);
    localStorage.setItem('TorbogenWest', Standorte.TorbogenWest);
    localStorage.setItem('TorbogenOst', Standorte.TorbogenOst);
  } else
  alert("Standort wurde nicht geändert")
}

export function AdminModeChange() {
  if (Admin.Admin !== 135792468) {
    Admin.Admin = 135792468;
    localStorage.setItem('Admin', Admin.Admin);
    alert("Admin Modus aktiviert");
  } else if (Admin.Admin === 135792468) {
    Admin.Admin = 0;
    localStorage.setItem('Admin', Admin.Admin);
    alert("Admin Modus deaktiviert");
  }
}

export let InhaltBoxes = {
  Box1: parseInt(localStorage.getItem('Box1')) || 0,
  Box2: parseInt(localStorage.getItem('Box2')) || 0,
  Box3: parseInt(localStorage.getItem('Box3')) || 0
}

export function setInhaltBoxes(whichBox){
  if (whichBox === "Box1"){
  InhaltBoxes.Box1 = 1
  localStorage.setItem('Box1', InhaltBoxes.Box1);
  } else if (whichBox === "Box2"){
    InhaltBoxes.Box2 = 1
    localStorage.setItem('Box2', InhaltBoxes.Box2);
  } else if (whichBox === "Box3"){
    InhaltBoxes.Box3 = 1
    localStorage.setItem('Box3', InhaltBoxes.Box3);
  }
}

export function expLS() {
  // Setze die Werte im Local Storage
  localStorage.setItem('Charisma', values.Charisma.toString());
  localStorage.setItem('username', values.username);
  localStorage.setItem('Name_abgefragt', values.Name_abgefragt.toString());
  localStorage.setItem('Geschlecht', values.Geschlecht.toString());
  localStorage.setItem('Startpunkt', Standorte.Startpunkt.toString());
  localStorage.setItem('Stadt', Standorte.Stadt.toString());
  localStorage.setItem('Taverne', Standorte.Taverne.toString());
  localStorage.setItem('TorbogenWest', Standorte.TorbogenWest.toString());
  localStorage.setItem('TorbogenOst', Standorte.TorbogenOst.toString());
  localStorage.setItem('StartAdventure', Quests.StartAdventure.toString());
  localStorage.setItem('Questblock1', Quests.Questblock1.toString());
  localStorage.setItem('Questblock2', Quests.Questblock1.toString());
  localStorage.setItem('SoundState', Soundset.SoundState);
  localStorage.setItem('Admin', AdminMode.Admin.toString());


  // Erstelle ein exportiertes Datenobjekt mit allen Werten als Strings
  var exportedData = JSON.stringify({
    values: {
      Charisma: values.Charisma.toString(),
      username: values.username,
      Name_abgefragt: values.Name_abgefragt.toString(),
      Geschlecht: values.Geschlecht.toString()
    },
    Standorte: {
      Startpunkt: Standorte.Startpunkt.toString(),
      Stadt: Standorte.Stadt.toString(),
      Taverne: Standorte.Taverne.toString(),
      TorbogenWest: Standorte.TorbogenWest.toString(),
      TorbogenOst: Standorte.TorbogenOst.toString()
    },
    Quests: {
      StartAdventure: Quests.StartAdventure.toString(),
      Questblock1: Quests.Questblock1.toString(),
      Questblock2: Quests.Questblock2.toString()
    },
    AdminMode: {
      Admin: AdminMode.Admin.toString()
    },
    InhaltBoxes: {
      Box1: InhaltBoxes.Box1.toString(),
      Box2: InhaltBoxes.Box1.toString(),
      Box3: InhaltBoxes.Box1.toString()
    },
    Soundset: {
      SoundState: Soundset.SoundState
    }
  });

  // Erstelle einen Blob und einen Download-Link
  var blob = new Blob([exportedData], { type: "application/json" });
  var link = document.createElement("a");

  // Lade den Blob herunter
  link.href = window.URL.createObjectURL(blob);
  link.download = "localStorageExport.json";
  link.click();
}


export function impLS(file) {
  var reader = new FileReader();

  reader.onload = function (e) {
    e.preventDefault(); // Füge dies am Anfang der Funktion hinzu
    try {
      var importedData = JSON.parse(e.target.result);
      console.log('Importierte Daten:', importedData);


      // Setze die importierten Werte im Local Storage
      localStorage.setItem('Charisma', importedData.values.Charisma);
      localStorage.setItem('username', importedData.values.username);
      localStorage.setItem('Name_abgefragt', importedData.values.Name_abgefragt);
      localStorage.setItem('Geschlecht', importedData.values.Geschlecht);
      localStorage.setItem('Startpunkt', importedData.Standorte.Startpunkt);
      localStorage.setItem('Stadt', importedData.Standorte.Stadt);
      localStorage.setItem('Taverne', importedData.Standorte.Taverne);
      localStorage.setItem('TorbogenWest', importedData.Standorte.TorbogenWest);
      localStorage.setItem('TorbogenOst', importedData.Standorte.TorbogenOst);
      localStorage.setItem('StartAdventure', importedData.Quests.StartAdventure);
      localStorage.setItem('Questblock1', importedData.Quests.Questblock1);
      localStorage.setItem('Questblock2', importedData.Quests.Questblock2);
      localStorage.setItem('Admin', importedData.AdminMode.Admin);
      localStorage.setItem('SoundState', importedData.Soundset.SoundState);
      localStorage.setItem('Box1', importedData.InhaltBoxes.Box1);
      localStorage.setItem('Box2', importedData.InhaltBoxes.Box2);
      localStorage.setItem('Box3', importedData.InhaltBoxes.Box3);

      // ... setze hier alle anderen importierten Werte ...

    } catch (error) {
      console.error('Fehler beim Parsen der importierten Daten:', error);
      alert('Fehler beim Importieren der Daten. Siehe Konsole für Details.');
    }
  };

  reader.readAsText(file);
}

