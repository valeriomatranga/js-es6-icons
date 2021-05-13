const icons =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
console.log(icons);

let colore;
icons.forEach((icon) =>{

    if(icon.type == 'animal'){
        colore = 'blue';
    }else if(icon.type == 'vegetable'){
        colore = 'orange';
    }else{
        colore = 'purple';
    }
    
    document.getElementById("container").insertAdjacentHTML("beforeend",`
    <div class="icon">
    <i id="logo" style="color:${colore}" class= "${icon.family} ${icon.prefix}${icon.name}"></i>
    ${icon.name}
    </div>`)
});


const vegetable = icons.filter((tipo)=>{
    return tipo.type == 'vegetable';
});
console.log(vegetable);

const user = icons.filter((tipo)=>{
    return tipo.type == 'user';
});

const animal = icons.filter((tipo)=>{
    return tipo.type == 'animal';
});

document.querySelector('.filtra').insertAdjacentHTML('beforeend',`

<select name="" id="icone">
    <option value="all">all ${icons}</option>
    <option value="vegetable">vegetable ${vegetable}</option>
    <option value="user">user ${user}</option>
    <option value="animal">animal ${animal}</option>
</select>

`)



