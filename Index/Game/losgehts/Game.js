import { values, Standorte, changeStandort, SetSoundState, InhaltBoxes, Soundset } from '../Werte.js';
import { Startpunkt } from './ScriptsLG/Startpunkt/Startpunkt.js';
import { StadtOW } from './ScriptsLG/Stadt/Overworld.js';
import { Taverne } from './ScriptsLG/Stadt/Taverne.js';
import { Quests, Questexe } from '../Quests.js';
import { TorbogenWest } from './ScriptsLG/Stadt/TorbogenWest.js';
import { TorbogenOst } from './ScriptsLG/Stadt/TorbogenOst.js';

export function Inhaltboxenaktivieren(){
    
    if (InhaltBoxes.Box1 ===1){
        $("#inhaltBox1").css("background", "url('./StylesLG/Inhaltboxen/InhaltBox1.png') center center");
        $("#inhaltBox1").css("background-size", "150%");
        $("#inhaltBox1").css("background-position", "center center");
        $("#inhaltBox1").css("background-repeat", "no-repeat");
        $("#inhaltBox1").addClass("inhaltBoxhover");
    }
    if (InhaltBoxes.Box2 === 1){
        $("#inhaltBox2").css("background", "url('./StylesLG/Inhaltboxen/InhaltBox2.png') center center");
        $("#inhaltBox2").css("background-size", "150%");
        $("#inhaltBox2").css("background-position", "center center");
        $("#inhaltBox2").css("background-repeat", "no-repeat");
        $("#inhaltBox2").addClass("inhaltBoxhover");
    }
    if (InhaltBoxes.Box3 === 1){
        $("#inhaltBox3").css("background", "url('./StylesLG/Inhaltboxen/InhaltBox3.png') center center");
        $("#inhaltBox3").css("background-size", "150%");
        $("#inhaltBox3").css("background-position", "center center");
        $("#inhaltBox3").css("background-repeat", "no-repeat");
        $("#inhaltBox3").addClass("inhaltBoxhover");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function() {

        Inhaltboxenaktivieren();
        
        //Sound
        var $audioElement = $('#meinAudio');
        $audioElement.prop('muted', true);
        $audioElement.prop('loop', true);
        $audioElement.prop('volume', 0.1);
        
        if (!$('#Sound').hasClass("SoundOn") && Soundset.SoundState === "on"){
            $("#Sound").addClass("SoundOn");
        } else if ($('#Sound').hasClass("SoundOn") && Soundset.SoundState === "off") {
            $("#Sound").removeClass("SoundOn");
        }


        $('#Sound').click(function() {
            var isMuted = $audioElement.prop('muted');
            $audioElement.prop('muted', !isMuted);
            
            if (isMuted) {
                // War vorher stummgeschaltet, jetzt nicht mehr stummgeschaltet
                $("#Sound").addClass("SoundOn");
                $audioElement[0].play();
                SetSoundState("on");
            } else {
                // War vorher nicht stummgeschaltet, jetzt stummgeschaltet
                $("#Sound").removeClass("SoundOn");
                SetSoundState("off");
            }
        });
        //Ende
      
      
    const Werte = $("#WerteMenu");
    let Adminfromlocalstorage = localStorage.getItem('Admin');
    const Geschlechtfromlocalstorage = localStorage.getItem('Geschlecht');

    let maxStandort = Object.keys(Standorte).reduce((a, b) => Standorte[a] > Standorte[b] ? a : b);

    disableAllButtons();

    updateValuesFromLocalStorage()

    Admin();
    
    function Admin(){
        if (Adminfromlocalstorage === "135792468") {
            $("#AdminTools").css("display", "none");
            $("#LocationSP").css("display", "none");
            $("#LocationSO").css("display", "none");
            $("#LocationT").css("display", "none");
          } else if (Adminfromlocalstorage != "135792468") {
            $("#AdminTools").css("display", "block");
            $("#LocationSP").css("display", "block");
            $("#LocationSO").css("display", "block");
            $("#LocationT").css("display", "block");
        }
    }

    if (maxStandort === 'Startpunkt') {
        Button1Funktionen("Startpunkt");
    } else if (maxStandort === "Stadt") {
        Button1Funktionen("Stadt");
    } else if (maxStandort === "Taverne") {
        Button1Funktionen("Taverne");
    } else if (maxStandort === "TorbogenWest"){
        Button1Funktionen("TorbogenWest");
    } else if (maxStandort === "TorbogenOst"){
        Button1Funktionen("TorbogenOst");
    }

    // Funktion zum Aktualisieren der Werte basierend auf dem LocalStorage
    function updateValuesFromLocalStorage() {
        const charismaFromLocalStorage = localStorage.getItem('Charisma');
        const usernameFromLocalStorage = localStorage.getItem('username');
    
        if (charismaFromLocalStorage !== null) {
            values.Charisma = parseInt(charismaFromLocalStorage);
        }
    
        if (usernameFromLocalStorage !== null) {
            values.username = usernameFromLocalStorage;
        }
    
        // Aktualisiere maxStandort
        maxStandort = Object.keys(Standorte).reduce((a, b) => Standorte[a] > Standorte[b] ? a : b);
    
        // Aktualisiere die Anzeige der Werte
        $(".CharismaWert").html(values.Charisma);
        $(".NameWert").html(values.username);
        $(".StandortWert").html(maxStandort);
    }
    

        $(window).on('storage', function (e) {
            // Überprüfe, ob sich der LocalStorage-Wert geändert hat
            if (e.originalEvent.key === 'Charisma' || e.originalEvent.key === 'username') {
                // Aktualisiere die Werte
                updateValuesFromLocalStorage();
            }
        });
      

    $("#Menü").click(function(){
        let collapseQ = $("#Quests");
        let collapseAdmin = $("#AdminTools");

        if (!$("#collapseQ").hasClass("collapsed")) {
            $("#collapseQ").click();
        }
        
        if (!$("#collapseAdmin").hasClass("collapsed")) {
            $("#collapseAdmin").click();
        }        
    });

    $("#Quests").click(function(){
        const Quest1FromLocalStorage = localStorage.getItem('StartAdventure');
        $("#QueckedQuests").css("display", "block");

        if (Object.values(Quests).some(value => value > 0)) {
            if (Quest1FromLocalStorage === "1" || Quest1FromLocalStorage === "2"){ // Achte darauf, dass der Wert aus dem Local Storage als Zeichenkette verglichen wird
                if (!$("#Der Start in dein neues Abenteuer").length) {                    
                    createQuestButton("Der Start in dein neues Abenteuer");

                    // Zeige den Button an (du musst den Button nach seiner Erstellung anzeigen)
                    $("#Der Start in dein neues Abenteuer").css("display", "block");

                    $("#Der Start in dein neues Abenteuer").click(function(){
                        if (!$("#QuestInfoText")){
                            Questexe("QuestInfoText", "QuestMenü");
                        } else {
                            $("#QuestInfoText").remove();
                        }
                    })
                } else if (Quest1FromLocalStorage === "3") {
                    if (!$("#Der Start in dein neues Abenteuer").length) {
                        createQuestButton("Der Start in dein neues Abenteuer");
                
                        // Zeige den Button an (du musst den Button nach seiner Erstellung anzeigen)
                        $("#Der Start in dein neues Abenteuer").css("display", "none");
                    }
                }
            }
        }
        $("#QueckedQuests").click(function(){
            if ($("#QueckedQuests").hasClass("erledigteQuestsChecked")){
                if (Quest1FromLocalStorage === "3"){
                    if (!$("#Der Start in dein neues Abenteuer").length) {
                        createQuestButton("Der Start in dein neues Abenteuer");
                
                        // Zeige den Button an (du musst den Button nach seiner Erstellung anzeigen)
                        $("#Der Start in dein neues Abenteuer").css("display", "none");
                    }
                $("#Der Start in dein neues Abenteuer").css("display", "block");
                
                $("#Der Start in dein neues Abenteuer").click(function(){
                    if ($("#QuestInfoText").length !== 0){
                        Questexe("QuestInfoText", "QuestMenü");
                    } else {
                        $("#QuestInfoText").remove();
                    }
                })
                }
            }else if (Quest1FromLocalStorage === "3"){
                $("#Der Start in dein neues Abenteuer").css("display", "none");
            }
        }) 
    });

    $("#Wertebutton").click(function () {
        let Ort = "";
        if ($("#WerteMenu").css("display") === 'none') {
            updateValuesFromLocalStorage();
            $(".CharismaWert").html(values.Charisma);
            if (Geschlechtfromlocalstorage === "Male") {
                $(".NameWert").html("♂ " + values.username);
            } else if (Geschlechtfromlocalstorage === "Female") {
                $(".NameWert").html("♀ " + values.username);
            }
    
            if (maxStandort === "TorbogenWest") {
                Ort = "Westlicher Torbogen";
            } else {
                Ort = maxStandort;
            }
            $(".StandortWert").html(Ort);
            $("#WerteMenu").css("display", 'block');
        } else {
            $("#WerteMenu").css("display", 'none');
        }
    });
      

    $("#Startmenü").click(function() {
        window.location.href = "../../index.html";
    })

    $("#dev").click(function() {
        window.open("https://www.instagram.com/philippkraut25/", "_blank");
    })

    $("#LocationSP").click(function(){
        let Adminfromlocalstorage = localStorage.getItem('Admin');

        if (Adminfromlocalstorage === "135792468"){
            $("#AdminTools").click();
            $("#Menü").click();
            changeStandort("Startpunkt");
            Startpunkt();
        } else {
            alert("Bitte aktiviere den Admin Modus im Startmenü")
            $("#AdminTools").click();
            $("#Menü").click();
            $("#AdminTools").style.display="none";
        }
    })

    $("#LocationSO").click(function(){
        let Adminfromlocalstorage = localStorage.getItem('Admin');

        if (Adminfromlocalstorage === "135792468"){
            $("#AdminTools").click();
            $("#Menü").click();
            changeStandort("Stadt");
            StadtOW();
        } else {
            alert("Bitte aktiviere zuerst den Admin Modus im Startmenü");
            $("#AdminTools").click();
            $("#Menü").click();
            $("#AdminTools").style.display="none";
        }
    })

    document.getElementById("LocationT").addEventListener("click", function(){
        let Adminfromlocalstorage = localStorage.getItem('Admin');

        if (Adminfromlocalstorage === "135792468"){
            $("#AdminTools").click();
            $("#Menü").click();
            changeStandort("Taverne");
            Taverne();
        } else {
            alert("Bitte aktiviere den Admin Modus im Startmenü");
            $("#AdminTools").click();
            $("#Menü").click();
            $("#AdminTools").style.display="none";
        }
    })

    function createQuestButton(QuestName) {
        var button = $('<button>', {
            'class': 'btn btn-light mb-2',
            'text': QuestName,
            'id': QuestName
        });
    
        $('#Questsausgeklappt').append(button);
    }    

    $("#QueckedQuests").click(function() {
        $(this).toggleClass("erledigteQuestsChecked");
    });  

    $("#inhaltBox1").click(function(){
        if ($("#inhaltBox1").hasClass("inhaltBoxhover")){
            //Hier Erklärung zu dem Gegenstand einblenden
        }
    })
    $("#inhaltBox2").click(function(){
        if ($("#inhaltBox2").hasClass("inhaltBoxhover")){
            //Hier Erklärung zu dem Gegenstand einblenden
        }
    })
    $("#inhaltBox3").click(function(){
        if ($("#inhaltBox3").hasClass("inhaltBoxhover")){
            //Hier Erklärung zu dem Gegenstand einblenden
        }
    })
  });
});

export function Button1Funktionen(Event){

    if (Event === "Startpunkt"){
        Startpunkt();
    } else if (Event === "Stadt"){
        StadtOW();
    } else if (Event === "Taverne"){
        Taverne();
    } else if (Event === "TorbogenWest"){
        TorbogenWest();
    } else if (Event === "TorbogenOst"){
        TorbogenOst();
    }
}

export function disableAllButtons() {
    // Alle Buttons auswählen und ausblenden
    $('button').css('display', 'none');
}

export function enableSpecificButtons(exceptionIds) {
    // Iteriere über die Ausnahmen (Buttons, die aktiviert bleiben sollen)
    exceptionIds.forEach(function(id) {
        // Suche den Button mit der entsprechenden ID und aktiviere ihn
        $('#' + id).css('display', 'block');
    });
}

export function Buttoncreate(HTMLid, Klasse, Textinhalt, angezeigt, leftcss, topcss, indexz) {
    var $button = $('<button>', {
        id: HTMLid,
        text: Textinhalt,
        style: angezeigt
    }).css({
        left: leftcss,
        top: topcss,
        zIndex: indexz
    });

    // Füge die Klassen zur classList des Buttons hinzu
    $button.addClass(Klasse);

    $('body').append($button);
    
    return $button; // Das erstellte Button-Element als jQuery-Objekt zurückgeben
}

export function ButtoncreateohneLocation(HTMLid, Klasse, Textinhalt, angezeigt) {
    var $button = $('<button>', {
        id: HTMLid,
        text: Textinhalt,
        style: angezeigt
    });

    // Füge die Klassen zur classList des Buttons hinzu
    $button.addClass(Klasse);

    $('body').append($button);
    
    return $button; // Das erstellte Button-Element als jQuery-Objekt zurückgeben
}

export function creatediv(id, classes, textContent, display) {
    var $div = $('<div>', {
        id: id,
        text: textContent
    }).css({
        display: display
    });

    $div.addClass(classes);

    $('body').append($div);

    return $div;
}

export function Sexdefinition(){
    const Sex = localStorage.getItem('Geschlecht');
    var derdem = "";
    var diesedieser = "";
    var derdie = "";
                        
    if ( Sex === "Female" ){
        derdem = "der";
        diesedieser = "diese";
        derdie = "die";
    } else if ( Sex === "Male") {
        derdem = "dem";
        diesedieser = "dieser";
        derdie = "der";
    }

    return { derdem, diesedieser, derdie }; //Hier alle Variablen einfügen, welche noch dazu kommen
}

