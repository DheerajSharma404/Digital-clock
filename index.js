const ampm = document.querySelector(".ampm");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function updateTime() {
   const now = new Date();
   let h = now.getHours();
   let m = now.getMinutes();
   let s = now.getSeconds();
   const suffix = h >= 12 ? "PM" : "AM";
   h = h >= 13 && h <= 23 ? h - 12 : h + 12;
   h = h <= 9 ? `0${h}` : `${h}`;
   m = m <= 9 ? `0${m}` : `${m}`;
   s = s <= 9 ? `0${s}` : `${s}`;
   ampm.textContent = `${suffix}`;
   hours.textContent = `${h}`;
   minutes.textContent = `${m}`;
   seconds.textContent = `${s}`;
   setTimeout(() => {
      updateTime();
   }, 1000);
}
updateTime();
