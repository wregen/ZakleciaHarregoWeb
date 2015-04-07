/* 
    Created on : 2015-04-05, 14:35:00
    Author     : W.Regenczuk
*/

if (window.location.protocol !== "https:" && window.location.hostname !== 'localhost') {
    window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}
