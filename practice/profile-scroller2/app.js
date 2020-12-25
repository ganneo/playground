async function* profileGenerator() {
  let fileIndex = 1;

  while (true) {
    const response = await fetch(`./profile-${fileIndex}.json`);
    const profileArray = await response.json();
    for (profile of profileArray) {
      yield profile;
    }
    fileIndex = (fileIndex % 3) + 1;
  }
}

const generator = profileGenerator();

const profileImg = document.getElementById("profile-img");
const name = document.getElementById("name");
const age = document.getElementById("age");
const loc = document.getElementById("loc");
const gender = document.getElementById("gender");
const preference = document.getElementById("preference");

function showProfile() {
  generator.next().then((profileObj) => {
    console.log(profileObj);
    profileImg.src = profileObj.value.profileLink;
    name.textContent = profileObj.value.name;
    age.textContent = profileObj.value.age;
    loc.textContent = profileObj.value.location;
    gender.textContent = profileObj.value.gender;
    preference.textContent = profileObj.value.preference;
  });
}

showProfile();

document.getElementById("next-btn").addEventListener("click", showProfile);
