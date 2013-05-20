var pafe = new require('./build/Release/pafe').PaFe();

var FELICA_LITE_SYSTEM_CODE = 0x88B4;
var TIMESLOT = 0;

var STUDENT_INFO_SERVICE_CODE = 0x000B;
var STUDENT_INFO_BLOCK_NUM = 0x8004;
var STUDENT_INFO_SUBSTRING_BEGIN = 2;
var STUDENT_INFO_SUBSTRING_END = 9;

var timeslot = 500;

pafe.pasori_open();
pafe.pasori_set_timeout(50);

pafe.felica_polling(FELICA_LITE_SYSTEM_CODE, TIMESLOT);

var data = pafe.felica_read_single(STUDENT_INFO_SERVICE_CODE,
                                   0,
                                   STUDENT_INFO_BLOCK_NUM);
pafe.felica_close();

console.log(data);
