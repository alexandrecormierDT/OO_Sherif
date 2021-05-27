window.Sherif = {}; 
window.Sherif.view = {}; 
window.Sherif.model = {}; 
window.Sherif.control = {}; 




window.Sherif.serial_count = 0;

window.Sherif.generate_serial = function(){

    window.Sherif.serial_count++;

    var k = Math.floor(Math.random() * 1000000);

    var index = window.Sherif.serial_count+"";

    var unique_id = k+""+index

    return unique_id;

}


