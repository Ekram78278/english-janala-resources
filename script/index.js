const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") 
    .then(res => res.json())
    .then(json => displayLesson(json.data))
}

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
}

const displayLesson = (lessons) => {

// 1 get the container
const levelContainer = document.getElementById("level-container")
levelContainer.innerHTML= ""
// get into every lessons
  for (let lesson of lessons){
const btnDiv = document.createElement("div")

btnDiv.innerHTML = `
 <button onClick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
                  <i class="fa-solid fa-book-open"></i>Lesson-${lesson.level_no}</button>
`
levelContainer.appendChild(btnDiv)
  }
//  create element 
//  append into container 


}
loadLessons();