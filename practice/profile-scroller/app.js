function profileIterator() {
  let numRemaningProfile = 0;
  let index = 0;
  let profileArray;
  let fileIndex = 1;

  return {
    next: async function () {
      if (numRemaningProfile === 0) {
        index = 0;
        const response = await fetch(`./profile-${fileIndex}.json`);
        profileArray = await response.json();
        numRemaningProfile = profileArray.length;
        fileIndex = (fileIndex % 3) + 1;
      }

      const profile = profileArray[index++];
      numRemaningProfile -= 1;
      return profile;
    },
  };
}

const iterator = profileIterator();

const profileImg = document.getElementById("profile-img");
const name = document.getElementById("name");
const age = document.getElementById("age");
const loc = document.getElementById("loc");
const gender = document.getElementById("gender");
const preference = document.getElementById("preference");

function showProfile() {
  iterator.next().then((profile) => {
    profileImg.src = profile.profileLink;
    name.textContent = sprofile.name;
    age.textContent = profile.age;
    loc.textContent = profile.location;
    gender.textContent = profile.gender;
    preference.textContent = profile.preference;
  });
}

showProfile();

document.getElementById("next-btn").addEventListener("click", showProfile);
