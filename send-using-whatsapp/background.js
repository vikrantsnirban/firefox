browser.menus.create({
      id: "whatsapp-web",
      title: "Send Message using WhatsApp",
      contexts: ["selection"]
    });

browser.menus.onClicked.addListener((info, tab) => {
   browser.tabs.create({
	"url": "https://web.whatsapp.com/send?phone=91" + info.selectionText +"&text=Hi%2C%0D%0ALocanto+se+appka+number+mila.%0D%0ARate+kya+hai+shot+ka%3F"
   });
});
