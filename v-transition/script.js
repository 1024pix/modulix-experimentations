let grainId = 1;

document.addEventListener('DOMContentLoaded', load);

function load(event) {
    document.getElementById('test').addEventListener('click', addGrain)
}

function addGrain() {
    injectGrain();
    scrollToGrain();
    document.getElementById(`button_grain_${grainId}`).addEventListener('click', addGrain)
    grainId++;
}

function injectGrain() {
    const GRAIN = `
        <article tabindex="-1" id="grain_${grainId}" class="grain grain--fade-in-image">
          <div class="introduction">
            <p>
              Grain défi num. ${grainId} : Vous l’avez sûrement remarqué, nous parlons depuis le début de ce
              chapitre d’adresses IP publiques.
            </p>
            <p>
              Il existe un autre type d’adresse IP : les adresses IP privées,
              aussi appelées IP locales. Voici les différences entre ces deux
              types d’adresses
            </p>
          </div>

          <div class="content">
            <div class="content__text">
              <p>Votre adresse IP publique :</p>
              <ul>
                <li>est visible en ligne par les sites que vous visitez</li>
                <li>
                  permet les échanges entre votre box internet et les sites que
                  vous visitez
                </li>
                <li>est spécifique à votre box internet</li>
              </ul>

              <p>Votre adresse IP privée :</p>
              <ul>
                <li>
                  n’est pas visible en ligne par les sites que vous visitez
                </li>
                <li>
                  permet les échanges entre votre box internet et les appareils
                  connectés à votre box (votre réseau local)
                </li>
                <li>
                  est spécifique à chaque appareil connecté à votre box (une
                  adresse par appareil)
                </li>
              </ul>
            </div>

            <footer class="content__footer">
              <button id="button_grain_${grainId}" class="button button--green">Continuer</button>
            </footer>
          </div>
        </article>
`;
    const module = document.querySelector('#module_1 .module__content');
    module.insertAdjacentHTML('beforeend', GRAIN);
}

function scrollToArticle() {
    const prevGrain = document.getElementById(`grain_${grainId}`);
    if (prevGrain) {
        prevGrain.focus();
    }
}
