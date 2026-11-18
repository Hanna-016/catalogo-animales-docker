const animals = [
  {
    name: "Luna", type: "Gato", category: "Gato",
    description: "Curiosa, tranquila y experta en encontrar los lugares más cómodos.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Max", type: "Perro", category: "Perro",
    description: "Un compañero alegre que siempre está listo para salir a explorar.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Nala", type: "Gato", category: "Gato",
    description: "Independiente y observadora; disfruta cada rincón de su territorio.",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Toby", type: "Perro", category: "Perro",
    description: "Amistoso y juguetón. Su actividad favorita es compartir en familia.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Zorro rojo", type: "Silvestre", category: "Silvestre",
    description: "Un mamífero astuto que se adapta a distintos ambientes naturales.",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Búho", type: "Silvestre", category: "Silvestre",
    description: "Ave de hábitos nocturnos, conocida por su visión y oído agudos.",
    image: "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=900&q=85"
  }
];

const animalGrid = document.querySelector("#animalGrid");
const searchInput = document.querySelector("#searchInput");
const emptyMessage = document.querySelector("#emptyMessage");
const filterButtons = document.querySelectorAll(".filter-button");

let activeFilter = "Todos";

function renderAnimals() {
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredAnimals = animals.filter((animal) => {
    const matchesFilter = activeFilter === "Todos" || animal.category === activeFilter;
    const matchesSearch = animal.name.toLowerCase().includes(searchText) ||
      animal.description.toLowerCase().includes(searchText);
    return matchesFilter && matchesSearch;
  });

  animalGrid.innerHTML = filteredAnimals.map((animal, index) => `
    <article class="animal-card">
      <img class="animal-image" src="${animal.image}" alt="Fotografía de ${animal.name}" loading="lazy">
      <div class="animal-info">
        <div class="animal-meta">
          <span class="animal-type">${animal.type}</span>
          <span class="animal-number">FAUNA / 0${index + 1}</span>
        </div>
        <h3>${animal.name}</h3>
        <p>${animal.description}</p>
      </div>
    </article>
  `).join("");

  emptyMessage.hidden = filteredAnimals.length > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderAnimals();
  });
});

searchInput.addEventListener("input", renderAnimals);
renderAnimals();
