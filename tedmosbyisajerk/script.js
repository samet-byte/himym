

text_string = "visitors since 10/9/06";
txt_color = "#000000"  // Text string color
counter = 510005;      // Counter starts at this,
revision = 1;          // Every time you alter your initial counter value (above), you must also change the revision number.
page_code = 1;         // Unless you want every page to use the same counter, you'll need to use a different page code for each page.
hitsperday = 2000;     // How many hits per day you want.
bg_color = "#000000"   // Background color of counter
fg_color = "#669999"   // Foreground color of counter
link_color = "#0000FF" // Color of link back (Powered by MegaCounter)
back_color = "" // Color of white space in counter area


    var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* Generic cookie routines (most written by others)
=============================================================*/
// Use this function to retrieve a cookie.
function getCookie(name){
   var cname = name + "=";
   var dc = document.cookie;
   if (dc.length > 0) {
      begin = dc.indexOf(cname);
      if (begin != -1) {
         begin += cname.length;
         end = dc.indexOf(";", begin);
         if (end == -1) end = dc.length;
         return unescape(dc.substring(begin, end));
      }
   }
   return null;
}

// Use this function to save a cookie.
function setCookie(name, value, expires) {
   document.cookie = name + "=" + escape(value) + "; path=/" +
   ((expires == null) ? "" : "; expires=" + expires.toGMTString());
}

// Use this function to delete a cookie.
function delCookie(name) {
   document.cookie = name + "=; expires=Thu, 01-Jan-70 00:00:01 GMT" +  "; path=/";
}

var expire_date = new Date();
expire_date.setTime(expire_date.getTime() + (1000 * 60 * 60 * 24 * 365));  // Last number is for number of days.

function testCookiesEnabled() {
   cookiesEnabled = 0;
   setCookie('bitstest', 'yeppers', expire_date);
   if (getCookie('bitstest') == 'yeppers'){cookiesEnabled = 1;}
   delCookie('bitstest');
   return cookiesEnabled;
}


}

    var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


/* random number generator *****************************/
function getMegaRandom(min,max) {return (Math.round(Math.random()*(max-min)))+min;}

/* get the current time & date (in number of milliseconds since 1/1/70) */
var mydateobject = new Date();
var current_counter_time = mydateobject.getTime();

/* check for cookie ************************************/
var counter_cookie = getCookie('megacounter'+page_code);
var last_counter_time = getCookie('megacounter_date'+page_code);
var old_revision = getCookie('megacounter_revision'+page_code);
if (counter_cookie)
{
   if (revision == old_revision)
   {
      counter = counter_cookie;
   }
   var seconds_since_last = ((current_counter_time*1) - (last_counter_time*1)) / 1000;
   var hits_since_last = Math.round(seconds_since_last / 86400 * hitsperday); // 86400 = seconds per day
   counter = (counter*1) + (hits_since_last*1);
}

/* add small random amount to value ********************/
var increment = getMegaRandom(1,2);
counter = (counter*1) + (increment*1);

/* store counter value, revision number and current date in cookies *****/
setCookie('megacounter'+page_code,counter,expire_date);
setCookie('megacounter_date'+page_code,current_counter_time,expire_date);
setCookie('megacounter_revision'+page_code,revision,expire_date);


}