class Channel {
  constructor() {
    this.subscribers = [];
  }

  register(subscriber) {
    this.subscribers.push(subscriber);
    console.log(`${subscriber.name} subscribed!`);
  }

  deregister(subscriber) {
    this.subscribers = this.subscribers.filter((ele) => ele !== subscriber);
    subscriber.clear();
  }

  fire() {
    this.subscribers.forEach((ele) => ele.fire());
  }
}

const dataMsEle = document.querySelector(".data-ms");
const dataSecEle = document.querySelector(".data-sec");
const channel = new Channel();

const ms = {
  name: "ms subscriber",
  fire: () => {
    const currDate = new Date();
    const pEle = `<p>Milliseconds: ${currDate.getMilliseconds()}</p>`;
    dataMsEle.innerHTML = pEle;
  },
  clear: () => {
    dataMsEle.innerHTML = "";
  },
};

const msBtn = document.querySelector(".sub-ms");
msBtn.addEventListener("click", () => {
  channel.register(ms);
});

const unsubMsBtn = document.querySelector(".unsub-ms");
unsubMsBtn.addEventListener("click", () => {
  channel.deregister(ms);
});

const fireBtn = document.querySelector(".fire");
fireBtn.addEventListener("click", () => {
  channel.fire();
});
