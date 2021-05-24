window.Sherif = {}; 
window.Sherif.view = {}; 
window.Sherif.model = {}; 
window.Sherif.control = {}; 




window.Sherif.serial_count = 0;

window.Sherif.generate_serial = function(){

    window.Sherif.serial_count++;

    var n = Math.floor(Math.random() * 11);
    var k = Math.floor(Math.random() * 1000000);
    var m = String.fromCharCode(n) + k;

    var index = window.Sherif.serial_count+"";

    var unique_id = m+""+index

    return unique_id;

}
