export function HeroCreationForm() {
    function handleSumbit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const hero = Object.fromEntries(formData.entries());
//        const hero = Entity(formData.entries());
        console.log(hero);
    }
    return (
        <dialog>
            <form method="post" onSubmit={handleSumbit}>
                <label htmlFor={"heroName"}>Please insert your hero's name here: </label>
                <input className="border-solid border-2 border-black w-32"  id="heroName" type="text" name="name"/>
            </form>
        </dialog>
    );
}
export function Entity(name) {
    return {
        name
    }
}
