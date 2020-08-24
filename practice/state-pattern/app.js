class States {
  constructor() {
    this.stateHeader = document.getElementById("state-header");
    this.stateBody = document.getElementById("state-body");
  }

  homeState() {
    this.stateHeader.textContent = "Home Sweet Home";
    this.stateBody.innerHTML =
      "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, inventore autem eos error ipsam tempore quasi ut obcaecati consequuntur placeat fugiat maxime molestias facilis ratione nam sint natus! At enim perferendis excepturi inventore, similique eveniet quod autem impedit quis architecto facere ullam? Laudantium labore ipsum at minus assumenda facilis omnis aliquid iste! Soluta voluptatum, excepturi laboriosam saepe laudantium esse quod culpa officiis sapiente vel magni blanditiis architecto, velit at, animi libero! Perspiciatis corrupti ipsa provident saepe ducimus quis facere ea quam laborum quos necessitatibus consequatur deserunt odio natus, explicabo dolorum fuga distinctio dolor, earum beatae delectus, voluptates quisquam! Repudiandae corrupti laudantium at mollitia quaerat non a obcaecati sint minus facere ab modi consequuntur ad eligendi consequatur ducimus, reiciendis doloribus. Aliquam, quos? Fugit vel, autem vitae maiores tenetur nesciunt ea harum amet. Qui laborum ab cumque? Ab, voluptatibus at veniam, ratione soluta similique asperiores dolores voluptates, reprehenderit possimus inventore illum qui.</p>";
  }

  aboutState() {
    this.stateHeader.textContent = "About Us";
    this.stateBody.innerHTML =
      "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, provident cupiditate libero veritatis minima eum incidunt explicabo, laudantium nemo pariatur amet laborum mollitia id sint. Quisquam fugit minima magnam quis velit itaque reiciendis consectetur blanditiis obcaecati iusto nostrum inventore laboriosam, totam illum odit in et illo porro eligendi ad voluptatum?</p>";
  }

  contactState() {
    this.stateHeader.textContent = "Contact Us";
    this.stateBody.innerHTML = `<form>
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
  }
}

const states = new States();
states.homeState();

const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");
const contactBtn = document.getElementById("contact");
const hamburgerBtn = document.querySelector(".navbar-toggler-icon");

homeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  states.homeState();
  hamburgerBtn.click();
});

aboutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  states.aboutState();
  hamburgerBtn.click();
});

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  states.contactState();
  hamburgerBtn.click();
});
