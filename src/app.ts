import '../dist/assets/css/output.css'

import { testPage } from "./pages/page";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container justify-center flex mx-auto bg-amber-800">
    <div class="flex w-3/4 bg-cyan-500">
        <div class="w-2/4 bg-cyan-400">
            Text
        </div>
        <div class="flex w-full bg-amber-400">
            <h1 class="text-9xl">Testar att.</h1>
        </div>
    </div>
  </div>
`

document.querySelector('.jo')!.addEventListener('click', () => {
    testPage()
})