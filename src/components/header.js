import nav from "./nav";
const Header = {
    print(){
        return /* html */`
        <header class="max-w-5xl mx-auto">
          <div class="bg-blue-900 py-4">
            <img src="../Assignment/img/logo (1).png" class="mx-auto"/>
          </div>
          <div>
          ${nav.print()}
          </div>
        </header>`
    }
}
export default Header;