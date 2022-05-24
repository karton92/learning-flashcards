export const data = {
  javascript: [
    {
      id: 1,
      title: "Co to są promise?",
      body: (
        <>
          <p>
            Obiekty Promise zostały wprowadzone od ECMAScript 6 jako natywne wsparcie dla operacji asynchronicznych. Dzięki nim można niejako odłożyć
            wykonanie pewnej logiki na bok i zająć się głównym przepływem aplikacji. Przetwarzanie metody asynchronicznej może zakończyć się
            powodzeniem – wtedy wywołujemy metodę resolve() lub porażką – wtedy metodę reject();
          </p>
          <p>Obiekt ten zawsze występuje w jednym z trzech stanów:</p>
          <ul>
            <li>Pending - wywołanie zostało zainicjowane ale jeszcze nie ukończone</li>
            <li>Fullfilled - .then() - wywołanie zakończone sukcesem</li>
            <li>Rejected - .catch() - wywołanie zakończone porażką</li>
          </ul>
          <p>
            Na obiekcie Promise zwróconym przez metodę możemy wywołać dwie metody: then odpowiedzialną za przetwarzanie udanego wywołania; catch
            odpowiedzialną za obsługę błędów.
          </p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 2,
      title: "Co to jest async/await?",
      body: (
        <>
          <p>
            Jest to inny sposób w jaki możemy sobie poradzić z Promise'ami - a dokładniej jak sprawić by kod asynchroniczny zapisać jako
            synchroniczny. Mamy tutaj dwa nowe słowa kluczowe, które najczęściej stosujemy razem: async i await. Słowo async stosujemy tylko do
            funkcji - oznaczamy tym, że funkcja zawsze zwraca Promise'a nawet jeśli zwracana wartość nim nie jest.
          </p>
          <p>
            Drugie zastosowanie jest związane z słowem kluczowym await - możemy go stosować tylko wewnątrz funkcji async. Słowo await powoduje, że
            program czeka z przejściem do następnej linii w kodzie do momentu zakończenia się asynchronicznej akcji, która jest tuż za tym słowem.
          </p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 3,
      title: "Jakie są różnice między map, a forEach?",
      body: (
        <>
          <p>
            Główna różnica między .forEach i .map() to to, że .map() <strong>zwraca nową tablicę</strong>, więc jeśli potrzebujesz wyniku, ale{" "}
            <strong>nie chcesz mutować oryginalnej tablicy</strong>, .map() jest lepszym wyborem.
          </p>
          <p>Jeśli celem jest iterować tablicę i nie jest problemem jej mutowanie (zmienianie) to forEach jest dobrym wyborem.</p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 4,
      title: "Co to jest scope? Zakres zmiennych w JavaScript?",
      body: (
        <>
          <p>
            Scope, czyli zakres zmiennych od ECMAScript 6 został dość mocno rozbudowany. Zakres poszczególnych zmiennych jest zależny od sposobu, w
            jaki zostaną zadeklarowane:
          </p>
          <ul>
            <li>
              <strong>LET</strong>
              <br />
              Przy pomocy słowa kluczowego let deklarujemy lokalne zmienne w ramach bloku kodu (block scope local variable). Zmienne tego typu
              zachowują się podobnie jak w innych językach, np. w Javie. Ich zakres jest ograniczony tylko do bloku kodu, w którym zostały
              zadeklarowane.
            </li>
            <li>
              <strong>CONST</strong>
              <br />
              Słowo kluczowe const służy do deklarowania stałych. Ich zakres jest analogiczny do zmiennych zadeklarowanych przy pomocy let. Jedyna
              różnica polega na tym, że raz przypisana do stałej wartość nie może zostać już zmodyfikowana.
            </li>
            <li>
              <strong>VAR</strong>
              <br />
              Zakres tych zmiennych ograniczony jest do funkcji, w której zostały zadeklarowane lub do przestrzeni globalnej, jeżeli były
              zadeklarowane poza funkcją.
            </li>
            <li>
              <strong>brak modyfikatora</strong>
              <br />
              Deklaracja zmiennej bez żadnego modyfikatora równoznaczna jest z przypisaniem jej do globalnej przestrzeni np. deklaracja zmiennej.
            </li>
          </ul>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 5,
      title: "Co to jest template literals/template string?",
      body: (
        <>
          <p>
            Od ECMAScript 6, mamy jeszcze dostęp do template literals, czasami nazywane też template strings, które zapisuje się za pomocą znaku
            backtick lub po polsku odwróconego apostrofu. Znak ten znajduje się na klawiaturach Windows pod klawiszem Escape.
          </p>
          <p>
            Używając odwróconego apostrofu, możemy{" "}
            <strong>budować bardziej złożone wartości string, które składają się ze zmiennych czy nawet funkcji.</strong> Oczywiście to samo możemy
            otrzymać przy konkatenacji stringów za pomocą znaku + jednak w tym przypadku czytelność wygrywa.
          </p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 6,
      title: "Czym jest domknięcie?",
      body: (
        <>
          <p>
            Domknięcie (closure) jest kombinacją funkcji i środowiska leksykalnego, w którym zadeklarowano tę funkcję. Słowo "leksykalny" odnosi się
            do faktu, że zakres leksykalny wykorzystuje lokalizację, w której zmienna jest zadeklarowana w kodzie źródłowym, w celu ustalenia, gdzie
            ta zmienna jest dostępna.
          </p>
          <p>
            Domknięcia to funkcje, które mają dostęp do zmiennych funkcji zewnętrznej (obejmującej) - łańcuch zasięgu nawet po zwróceniu funkcji
            zewnętrznej.
          </p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 7,
      title: "Co to jest hoisting?",
      body: (
        <>
          <p>
            Hoisting to wbudowany w JavaScript mechanizm wynoszący wszystkie deklaracje zmiennych na początek funkcji. Poleganie na hoistingu nie jest
            jednak najlepszą praktyką. Dużo lepszym wyjściem jest ręczna deklaracja zmiennych na początku funkcji, dzięki czemu kod staje się bardziej
            czytelny i można uniknąć dziwnych błędów.
          </p>
          <p>
            Domknięcia to funkcje, które mają dostęp do zmiennych funkcji zewnętrznej (obejmującej) - łańcuch zasięgu nawet po zwróceniu funkcji
            zewnętrznej.
          </p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 8,
      title: "Co to jest funkcja wywołania zwrotnego (callback)?",
      // prettier-ignore
      body: (
        <>
        <p>
          Wykorzystanie mechanizmu funkcji zwrotnych polega na przekazaniu
          fragmentu logiki (funkcji) jako argument do innej funkcji. Funkcja
          zwrotna może zostać wywołana lub nie w zależności od konkretnej
          sytuacji.</p>
          <p>Pozwala to na wydzielenie fragmentu wymiennej logiki poza
          główną funkcję. Przekazując metodę zwrotną jako argument, możemy
          utworzyć nową funkcję inline lub wykorzystać już istniejącą.
        </p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 9,
      title: "Co to jest Arrow functions?",
      body: (
        <>
          <p>
            Arrow functions (zwane także "fat arrow") to nowy sposób deklarowania funkcji wprowadzony w ES6, którego główną cechą jest to, że
            automatycznie przechwytuje ona wartość this dla momentu zadeklarowania, nie wywołania funkcji. Nowa składnia najczęściej przydaje się w
            przypadku wywołań zwrotnych (ang. callback) lub funkcji wywoływanych w timerach.
          </p>

          <p>Jeżeli funkcja posiada tylko jedno wyrażenie, możemy pominąć nawiasy, a wartość wyrażenia zostanie zwrócona domyślnie.</p>

          <p>
            Jedną oczywistą zaletą funkcji strzałek jest uproszczenie składni potrzebnej do tworzenia funkcji, bez potrzeby stosowania słowa
            kluczowego function. Funkcja this w funkcjach strzałek jest również związana z otaczającym zakresem, który jest inny w porównaniu do
            zwykłych funkcji, w których this jest określane przez obiekt wywołujący go.
          </p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 10,
      title: "Jaka jest różnica między == i ===?",
      body: (
        <>
          <p>
            Podwójny znak równości przed porównaniem danych próbuje je przekonwertować do tego samego typu, a potrójny znak równości porównuje jeszcze
            dodatkowo zgodność typów.
          </p>

          <p>
            <strong>Przykład:</strong>
            <br />
            <br />1 == "1" // true
            <br /> 1 === "1" // false
          </p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 11,
      title: "Jakie są różnice między zmiennymi utworzonymi za pomocą let, var lub const?",
      body: (
        <>
          <p>
            Zmienne zadeklarowane przy użyciu słowa kluczowego var mają zasięg do funkcji, w której zostały utworzone, lub jeśli zostały utworzone
            poza jakąkolwiek funkcją, do obiektu globalnego. Parametry let i const są block scoped, co oznacza, że są dostępne tylko w najbliższym
            zestawie nawiasów klamrowych (funkcja, blok if-else lub pętla for).
          </p>

          <ul>
            <li>var umożliwia windowanie zmiennych, co oznacza, że można do nich odwoływać się w kodzie przed ich zadeklarowaniem</li>
            <li>let oraz const nie pozwolą na to, zamiast tego zgłoszą błąd.</li>
            <li>ponowne zadeklarowanie zmiennej za pomocą var nie spowoduje błędu, ale 'let' oraz 'const', tak.</li>
            <li>let i const różnią się tym, że let pozwala na ponowne przypisanie wartości zmiennej, podczas gdy const nie.</li>
          </ul>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 12,
      title: "Jakie są różnicę między funkcjami synchronicznymi i asynchronicznymi?",
      body: (
        <>
          <p>
            Funkcje synchroniczne blokują, a funkcje asynchroniczne nie. W funkcjach synchronicznych instrukcje kończą się przed uruchomieniem
            następnej instrukcji. W takim przypadku program jest oceniany dokładnie w kolejności instrukcji, a wykonywanie programu jest wstrzymywane,
            jeśli jedna z instrukcji zajmuje bardzo dużo czasu.
          </p>
          <p>
            Funkcje asynchroniczne zwykle akceptują wywołanie zwrotne (callback) jako parametr i wykonywanie jest kontynuowane w następnym wierszu
            natychmiast po wywołaniu funkcji asynchronicznej. Wywołanie zwrotne jest wywoływane tylko wtedy, gdy operacja asynchroniczna jest
            zakończona, a stos wywołań jest pusty.
          </p>
          <p>
            Intensywne operacje, takie jak ładowanie danych z serwera WWW lub wyszukiwanie w bazie danych, powinny być wykonywane asynchronicznie, aby
            główny wątek mógł kontynuować wykonywanie innych operacji zamiast blokować do czasu zakończenia tej długiej operacji (w przypadku
            przeglądarek interfejs użytkownika (UI) zawiesza się).
          </p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 13,
      title: "Wyjaśnij różnice pomiędzy function example() {} i const example = function() {}",
      body: (
        <>
          <p>
            Pierwsza jest deklaracją funkcji, a druga jest wyrażeniem funkcji. Kluczową różnicą jest to, że <strong>deklaracje funkcji</strong> mają
            swoje ciała windowane, a ciała <strong>wyrażeń funkcji</strong> nie bo mają takie samo zachowanie podczas windowania jak zmienne.
          </p>
          <p>
            <strong>Jeśli spróbujesz wywołać wyrażenia funkcjne przed ich zdefiniowaniem</strong>, otrzymasz błąd Uncaught TypeError: example is not a
            function.
          </p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 14,
      title: "Jaka jest definicja funkcji wyższego rzędu?",
      body: (
        <>
          <p>
            Funkcja wyższego rzędu to dowolna funkcja, która przyjmuje jedną lub więcej funkcji jako argumenty, których używa do działania na
            niektórych danych i / lub zwraca w rezultacie funkcję. Funkcje wyższego rzędu mają na celu wyodrębnienie niektórych operacji, które są
            wykonywane wielokrotnie.
          </p>
          <p>
            Klasycznym przykładem tego jest map, który przyjmuje tablicę i funkcję jako argumenty. map następnie używa tej funkcji do transformacji
            każdego elementu w tablicy, zwracając nową tablicę z transformowanymi danymi.
          </p>
          <p>
            Inne popularne przykłady w JavaScript to forEach, filter i reduce. Funkcja wyższego rzędu nie musi tylko manipulować tablicami, ponieważ
            istnieje wiele przypadków użycia do zwrócenia funkcji z innej funkcji.
          </p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 15,
      title: "Czym jest destrukturyzacja?",
      body: (
        <>
          <p>
            Destrukturyzacja to wyrażenie dostępne w ES6, które umożliwia zwięzły i wygodny sposób na wydobycie wartości Obiektów (Objects) lub Tablic
            (Arrays) i umieszczenie ich w odrębnych zmiennych.
          </p>
        </>
      ),
      type: "Javascript",
    },
    {
      id: 16,
      title: "Jakie są zalety korzystania ze składni spread syntax i czym różni się od rest syntax?",
      body: (
        <>
          <p>
            Spread syntax z ES6 jest bardzo przydatna podczas kodowania w funkcjonalnym paradygmacie, ponieważ możemy łatwo tworzyć kopie tablic lub
            obiektów bez uciekania np. do metody slice. Ta funkcja języka jest często używana w projektach Redux i RxJS.
          </p>
          <p>
            Rest syntax z ES6 oferuje skrót do włączenia dowolnej liczby argumentów, które należy przekazać do funkcji. To jest jak odwrotność spread
            syntax, biorąc dane i upychając je do tablicy, zamiast rozpakowywać tablicę danych, i działa w argumentach funkcyjnych, a także w
            przypisaniach destrukturyzacji tablicy i obiektów.
          </p>
          <p>
            <strong>Przykład:</strong>
            <br />
            <code>const [a, b, ...rest] = [1, 2, 3, 4]; // a: 1, b: 2, rest: [3, 4]</code>
          </p>
        </>
      ),
      type: "Javascript",
    },
  ],
  css: [
    {
      id: 1,
      title: "Do czego służy box-sizing: border-box?",
      body: (
        <>
          <p>
            Domyślnie, elementy na stronie mają <strong>box-sizing: content-box</strong>, dzięki któremu zastosowany i uwzględniany jest tylko rozmiar
            contentu.
          </p>
          <p>
            Jeżeli użyjemy <strong>box-sizing: border-box</strong> to elementy na stronie takie jak border i padding są uwzględniane w obliczeniach.
          </p>
        </>
      ),
      type: "CSS",
    },
    {
      id: 2,
      title: "Co są pseudo-klasy?",
      body: (
        <>
          <p>
            Style CSS normalnie są dodawane do elementów na podstawie ich pozycji w drzewie dokumentu. Taki model nie zawsze jednak jest
            wystarczający. Pseudoklasy klasyfikują elementy inaczej niż po ich nazwie, atrybutach czy zawartości, tzn. w zasadzie nie są ustalane na
            podstawie drzewa dokumentu.
          </p>
          <p>
            <strong>Mogą być dynamiczne w tym sensie, że element "nabywa" lub "traci" pseudoklasę podczas interakcji z użytkownikiem.</strong>
          </p>
          <p>Przykładem jest podświetlenie elementu po wskazaniu go myszką przez użytkownika do czego służy np. pseudo-klasa hover.</p>
          <p> Wszystkie pseudoklasy można podzielić w następujący sposób:</p>
          <ul>
            <li>
              <strong>Pseudoklasy linków:</strong> :link, :visited
            </li>
            <li>
              <strong>Pseudoklasy akcji użytkownika:</strong> :active, :hover, :focus
            </li>
            <li>
              <strong>Pseudoklasa etykiety:</strong> :target
            </li>
            <li>
              <strong>Pseudoklasa języka:</strong> :lang()
            </li>
            <li>
              <strong>Pseudoklasy interfejsu użytkownika:</strong> :enabled, :disabled :checked
            </li>
            <li>
              <strong>Pseudoklasy strukturalne:</strong> :root :nth-child(), :nth-last-child(), :nth-of-type(), :nth-last-of-type() :first-child
              :last-child :only-child, :first-of-type, :last-of-type, :only-of-type :empty
            </li>
            <li>
              <strong>Pseudoklasa negacji:</strong> :not()
            </li>
          </ul>
        </>
      ),
      type: "CSS",
    },
    {
      id: 3,
      title: "Co to z-index?",
      body: (
        <>
          <p>
            Właściwość z-index w CSS kontroluje pionową kolejność układania elementów, które się nakładają. z-index wpływa tylko na elementy, które
            mają wartość position, która nie jest static.
          </p>
          <p>
            Bez żadnej wartości z-index, elementy układają się w kolejności, w jakiej występują w DOM (najniższy na dole na tym samym poziomie
            hierarchii pojawia się na górze).
          </p>
        </>
      ),
      type: "CSS",
    },
    {
      id: 4,
      title: "Jak przyspieszyć animacje i przejścia (transitions) w CSS",
      body: (
        <>
          <p>
            Jeśli jest taka możliwość, należy animować tylko właściwości transform oraz opacity, które są mało zasobożerne jeśli chodzi o animacje.
            Użycie transform: translate, do przesuwania elementu na ekranie, będzie bardziej płynne od zmiany właściwości left lub top.
          </p>
          <p>
            Dzieje się tak ponieważ, przy zmianie opacity oraz transform, nie jest wykonywana operacja layoutu, czyli obliczania wszystkich styli na
            stronie i aplikowania ich do poszczególnych elementów.
          </p>
        </>
      ),
      type: "CSS",
    },
    {
      id: 5,
      title: "Jaka jest różnica między Flexbox a GRID?",
      body: (
        <>
          <p>
            Podstawową i zasadniczą różnicą między tymi dwiema właściwościami jest to, że Flexbox jest właściwością jednowymiarową. To znaczy, że
            możemy dzięki niej układać elementy w poziomie LUB w pionie, natomiast Grid jest dwuwymiarowy i daje nam możliwość pracy w poziomie ORAZ w
            pionie.
          </p>
          <p>Dzięki gridowi możemy tworzyć bardziej asymetryczne układy stron internetowych, ponieważ daje nam większą kontrolę nad elementami.</p>
          <p>
            Dodatkowo mamy możliwość usytuowania elementów w taki sposób, aby nachodziły na siebie bez zakłócania reszty elementów tak jak robiła to
            właściwość float, po użyciu której często spotykaną praktyką było pisanie tak zwanych "Clearfixów".
          </p>
        </>
      ),
      type: "CSS",
    },
    {
      id: 6,
      title: "Co to są jednostki em i rem w CSS?",
      body: (
        <>
          <p>Jednostki miary wielkości em i rem w css, używa się do ustawiania wielkości cziconki.</p>
          <ul>
            <li>em stanowi odniesienie do wielkości czcionki rodzica.</li>
            <li>rem stanowi odniesienie do wielkości czcionki dokumentu głównego (roota, którym najczęściej jest znacznik html).</li>
          </ul>
        </>
      ),
      type: "CSS",
    },
    {
      id: 7,
      title: "Co to jest metodyka BEM?",
      body: (
        <>
          <p>
            Nazwa BEM pochodzi od angielskiego: “Block Element Modifier” i jest to wbrew pozorom bardzo proste podejście do tworzenia modularnego kodu
            CSS. Opiera się ono przede wszystkim na poniższym podziale elementów na stronie na:
          </p>
          <ul>
            <li>
              <strong>bloki</strong> - na przykład formularz albo menu
            </li>
            <li>
              <strong>elementy</strong> - poszczególne elementy bloku takie jak: input czy guzik formularza albo też link w menu
            </li>
            <li>
              <strong>modyfikatory</strong> - specyficzne warianty elementów: input do wpisywania hasła, guzik “Anuluj” lub aktywny link w menu
            </li>
          </ul>
          <p>W BEM istnieje pewna konwencja nazewnictwa klas CSS. Ogólne zasady tego nazewnictwa przedstawiam poniżej:</p>
          <ul>
            <li>
              <strong>.block</strong> - pierwsze słowo w nazwie oznacza, że klasa dotyczy danego bloku
            </li>
            <li>
              <strong>__element</strong> - słowo poprzedzone dwoma “podkreślnikami” oznacza, że dana klasa dotyczy danego elementu
            </li>
            <li>
              <strong>--modifier</strong> - słowo poprzedzone dwoma myślnikami określa kasę będącą modyfikatorem
            </li>
          </ul>
        </>
      ),
      type: "CSS",
    },
    {
      id: 8,
      title: "Co to są jednostki em i rem w CSS?",
      body: (
        <p>
          Jednostki miary wielkości em i rem w css, używa się do ustawiania wielkości cziconki.
          <br />
          <br />
          - em stanowi odniesienie do wielkości czcionki rodzica.
          <br />
          <br />- rem stanowi odniesienie do wielkości czcionki dokumentu głównego (roota, którym najczęściej jest znacznik html).
        </p>
      ),
      type: "CSS",
    },
    {
      id: 9,
      title: "Przykłady właściwości @media innej niż screen?",
      body: (
        <p>
          Są cztery typy właściwości dla @media (włączając w to screen): <br />
          <br />- <strong>all</strong> - dla wszystkich typu media
          <br />- <strong>print</strong> - dla drukarek
          <br />- <strong>speech</strong> - lub czytników ekranu, które "czytają" stronę na głos
          <br />- <strong>screen</strong> - do ekranów komputerowych, tabletów, smartfonów itp.
          <br />
        </p>
      ),
      type: "CSS",
    },
    {
      id: 10,
      title: "Jaka jest różnica między pozycjonowaniem relative, fixed, absolute i static elementu?",
      body: (
        <p>
          Element pozycjonowany to element, którego obliczona właściwość position jest albo relative, absolute, fixed lub sticky.
          <br />
          <br />
          <br />- <strong>static</strong> - Pozycja domyślna; element wpłynie na stronę w normalny sposób. Właściwości top, right, bottom, left i
          z-index nie mają zastosowania. <br />
          <br />- <strong>relative</strong> - Pozycja elementu jest dopasowywana względem siebie, bez zmiany układu (i tym samym pozostawiając odstęp
          dla elementu, w którym byłby, gdyby nie został ustawiony).
          <br />
          <br />- <strong>absolute</strong> - Element jest usuwany z przepływu strony i ustawiany w określonej pozycji względem najbliższego
          umieszczonego przodka, jeśli taki istnieje, lub w inny sposób względem początkowego bloku zawierającego. Pola absolutnie pozycjonowane mogą
          mieć marginesy i nie zwijają się z żadnymi innymi marginesami. Te elementy nie wpływają na pozycję innych elementów.
          <br />
          <br />- <strong>fixed</strong> - Element jest usuwany z przepływu strony i ustawiany w określonej pozycji względem viewport i nie porusza
          się podczas przewijania.
          <br />
          <br />- <strong>sticky</strong> - Pozycjonowanie sticky to hybryda pozycjonowania względnego i ustalonego. Element jest traktowany jako
          pozycja relative, dopóki nie przekroczy określonego progu, w którym to momencie jest traktowany jako pozycja fixed.
        </p>
      ),
      type: "CSS",
    },
  ],
  html: [
    {
      id: 1,
      title: "Czym jest HTML?",
      body: (
        <p>
          HTML (Hypertext Markup Language) jest to kod używany do tworzenia struktury strony i jej zawartości. Na przykład treść może być
          uporządkowana w obrębie zestawu akapitów, listy punktowanych punktów lub tabel obrazów i danych.
          <br />
          <br />
          HTML nie jest językiem programowania; jest językiem znaczników (ang. markup language). HTML składa się z serii znaczników (tagów), których
          używa się do zamknięcia, opakowania różnych części treści, tak aby wyglądały i/lub działały w określony sposób. Z pomocą tagów możesz ze
          słów czy obrazów zrobić linki do innych stron, sprawić by były napisane kursywą, większą czcionką, wytłuścić je itd.
        </p>
      ),
      type: "HTML",
    },
    {
      id: 2,
      title: "Czym różni się znacznik header od h1",
      body: (
        <p>
          Header jest to jeden ze znaczników semantycznych, za jego pomocą możemy utworzyć nagłówek. Który np. ma w sobie h1 a pod sobą np. imię,
          nazwisko i datę. Można też w nim umieścić. Nawigacje. Natomiast h1 jak i inne znaczniki h1-h6 służą do tworzenia nagłówka do jakiegoś tekstu
          np. tytuł artykułu, lub sekcji.
        </p>
      ),
      type: "HTML",
    },
    {
      id: 3,
      title: "Do czego służy znacznik main?",
      body: (
        <p>
          Według MDN jest to znacznik, który służy do umieszczenia głównej części strony. Powinien być tylko jeden taki znacznik na stronie (chociaż
          były o to spory to miedzy dwoma specyfikacjami, niestety nie mam żadnego źródła, jeśli znasz dodaj w komentarzu).
        </p>
      ),
      type: "HTML",
    },
    {
      id: 4,
      title: "Wymień 3 nowe tagi w HTML5",
      body: <p>Oto kilka: section, article, header, footer, main, video, audio, strong</p>,
      type: "HTML",
    },
    {
      id: 5,
      title: "Jak jest różnica między div a span?",
      body: (
        <p>
          Div to element blokowy, którego szerokość wynosi 100% natomiast tag span jest to element inline który można np. wstawić wewnątrz tekstu.
          Będzie się on zachować jak tekst, czyli można np. zapisać:
          <code>
            foo <span>bar</span> baz
          </code>
          <br />
          <br />
          Będzie to jedna linia, tak jakby elementu span nie było, można go jednak ostylować inaczej nadając mu np. kolor za pomocą CSS.
        </p>
      ),
      type: "HTML",
    },
    {
      id: 6,
      title: "Wymień 5 technologii występujących w HTML5",
      body: (
        <p>
          Canvas, WebGL, History API, Storage, Drag & Drop, content editable, Wysyłanie wiadomości (czyli postMessage i zdarzenie message), tagi audio
          i video. API które nie wchodzą do specyfikacji HTML5 to m.in. GEO Lokalizacja, WebRTC czy obsługa plików (File API, Directory API).
        </p>
      ),
      type: "HTML",
    },
    {
      id: 7,
      title: "Czym się różni ol od ul?",
      body: (
        <p>
          - <strong>ol</strong> - ordered list - to lista z numerami
          <br />- <strong>ul</strong> - unordered list - to lista puntów
        </p>
      ),
      type: "HTML",
    },
    {
      id: 8,
      title: "Do czego służy atrybut role?",
      body: (
        <p>
          Jest to znacznik, który określa znaczenie elementu. Głównie do celów dostępności (ang. accessibility). Jest częścią specyfikacji ARIA.
          Został też dodany do HTML5.
        </p>
      ),
      type: "HTML",
    },
    {
      id: 9,
      title: "Do czego służy atrybut role?",
      body: (
        <p>
          Do html można dodawać dowolne atrybuty, przeglądarki nie będą miały z nimi problemu. Ale aby być jednak zgodnym z HTML5, należy użyć
          atrybutu data-nazwa="wartość". Taki atrybut można potem pobrać za pomocą element.dataset.nazwa. (Zadziała też starszy, działający w każdej
          przeglądarce, getAttribute).
        </p>
      ),
      type: "HTML",
    },
    {
      id: 10,
      title: "Jak ograniczyć liczbę znaków w polu tekstowym?",
      body: <p>Służy do tego atrybut maxlength. wystarczy np. ustawić maxlength="100".</p>,
      type: "HTML",
    },
  ],
  react: [
    {
      id: 1,
      title: "Czy framework i biblioteka to to samo?",
      body: (
        <p>
          Biblioteka to zestaw funkcji i klas, które dotyczą konkretnego zagadnienia i problemu, a programista może wykorzystywać je w swoim kodzie.
          <br />
          <br />
          Framework (platforma programistyczna) – jest to szkielet do budowy aplikacji, który dostarcza niezbędne biblioteki i komponenty oraz
          definiuje strukturę i działanie danej aplikacji. Dzięki frameworkom tworzenie aplikacji staje się bardziej efektywne (mniej kodu do
          napisania), a sam kod jest wyższej jakości. Za wadę można uznać ich złożoność, przez co opanowanie ich działania nie jest łatwe.
          <br />
          <br />
          Zarówno biblioteki jak i frameworki są tylko i wyłącznie narzędziami, które trzeba dobierać w zależności od potrzeb w danym projekcie.
          Tworząc aplikacje bardzo często korzysta się z frameworka oraz wielu bibliotek.
        </p>
      ),
      type: "React",
    },
    {
      id: 2,
      title: "Czym jest React?",
      body: (
        <p>
          React jest tak zwaną biblioteką języka programowania JavaScript. Wykorzystuje się ją podczas tworzenia interfejsów użytkownika dla różnego
          typu aplikacji. Dostępna jest dla szerokiego grona odbiorców na zasadzie open source. Dzięki niej można stworzyć bardzo złożony interfejs,
          składający się z małych, oddzielonych od siebie elementów (komponentów).
          <br />
          <br />
          Warto podkreślić, że React JS został stworzony przez Jordana Walke – pracownika Facebooka, któremu przyświecała idea uproszczenia procesu
          budowania całego interfejsu oraz zapewnienie użytkownikom większej wygody podczas obsługi aplikacji.
          <br />
          <br />
          Biblioteka React wykorzystuje nowoczesny sposób renderowania stron internetowych. Dzięki temu stają się one bardziej dynamiczne. Sprawia to,
          że framework ten stanowi niezwykle innowacyjne podejście w programowaniu. Jest wygodny zarówno dla samego twórcy – programisty, jak i dla
          końcowego użytkownika, czyli odbiorcy aplikacji.
        </p>
      ),
      type: "React",
    },
    {
      id: 3,
      title: "Co są propsy?",
      body: (
        <p>
          Props to obiekt, zawierający wszystkie atrybuty JSX, <strong>przekazane do instancji komponentu dziecka przez rodzica</strong>
          . Komponenty wykorzystują props podobnie jak elementy HTML wykorzystują atrybuty. Props pozwala na opisanie szczegółów implementacyjnych
          danej instancji komponentu. Dzięki temu możemy pozbyć się jawnego wskazywania tych szczegółów w jego definicji i wpisywania danych na
          sztywno.
          <br />
          <br />
          Dzięki propsom <strong>komponenty zyskują wszechstronność i są zdatne do wielokrotnego użytku.</strong> Do props możemy przekazać dowolną,
          poprawną wartością JS. Liczby, obiekty, tablice, wartości boolean, funkcje etc. Komponenty mają znacznie szerszy wachlarz możliwości niż
          elementy HTML, ograniczające się wyłącznie do stringów.
        </p>
      ),
      type: "React",
    },
    {
      id: 4,
      title: "Do czego służy state?",
      body: (
        <p>
          State służy do zarządzania stanem aplikacji, a więc{" "}
          <strong>jest to miejsce, w którym przechowujemy różnego rodzaju informacje na temat aplikacji.</strong>
          <br />
          <br />
          State umożliwia renderowanie danych w komponentach, dzięki czemu można np. uzyskać informacje na temat czy dany element został kliknięty,
          czy strona się załadowała lub czy zaktualizować treść w aplikacji.
          <br />
          <br />
          Oczywiście jeśli zaimplementujemy daną funkcjonalność, ponieważ state to tylko dane.
        </p>
      ),
      type: "React",
    },
    {
      id: 5,
      title: "Co to jest komponent w React?",
      body: (
        <p>
          Komponent to funkcja, która zwraca i wyświetla nam pewną część aplikacji. Tworzenie ich to podstawowa czynność w React. Wszystko sprowadza
          się do podzielenia aplikacji na małe komponenty.
          <br />
          <br />
          Dzielenie kodu na komponenty ułatwia pracę programiście oraz zmniejsza koszty utrzymania aplikacji. Tworząc re-używalne komponenty można
          wykorzystać je w innych częściach programu.
          <br />
          <br />
          Jeśli będzie potrzeba zmienić coś w danym komponencie to zmiana zostanie wykonana tylko jeden raz zamiast w X miejscach. Czas wykonania
          będzie krótszy, a programiście będzie łatwiej zapanować nad kodem
        </p>
      ),
      type: "React",
    },
    {
      id: 6,
      title: "Co to są Hooki?",
      body: (
        <p>
          Hooki są to funkcje, które pozwalają „zahaczyć się” w mechanizmy stanu i cyklu życia Reacta, z wewnątrz komponentów funkcyjnych. Hooki nie
          działają w klasach — zamiast tego pozwalają korzystać z Reacta bez klas.
          <br />
          <br />
          Hooki są nowym dodatkiem w Reakcie 16.8. Pozwalają one używać stanu i innych funkcjonalności Reacta, bez użycia klas.
        </p>
      ),
      type: "React",
    },
    {
      id: 7,
      title: "Co to są komponenty wyższego rzędu?",
      body: (
        <p>
          Komponenty wyższego rzędu (ang. Higher Order Component - HOC) - zasada ich tworzenia jest podobna do funkcji wyższego rzędu. Komponenty tego
          typu do funkcje, które przyjmują komponenty jako argument oraz zwracają nowy argument.
          <br />
          <br />
          Przykładem może być funkcja connect z biblioteki Redux.
        </p>
      ),
      type: "React",
    },
    {
      id: 8,
      title: "Jak działa JSX?",
      body: (
        <p>
          Kompilator JSX, np. Babel parsuje kod JavaScript (JSX), znajduje wszystkie odwołania do tagów html i zastępuje je wywołaniem funkcji
          React.createElement lub w przypadku, gdy nazwa tagu jest z dużej litery, kompilator używa zmiennej komponentu.
          <br />
          <br />Z JSX nie korzysta tylko React, ale także inne frameworki. Takie jak np. Preact, które mogą korzystać z innej funkcji do tworzenia
          elementów w wynikowym kodzie JavaScript, dlatego np. Babel posiada dyrektywę, za pomocą której można np. zmienić domyślny
          React.createElement na funkcje h, z której korzysta Preact.
        </p>
      ),
      type: "React",
    },
    {
      id: 9,
      title: "Omów cykl życia komponentu w React",
      body: (
        <p>
          Komponent w React może być w 3 stanach
          <br />
          <br />
          1. <strong>Montowania</strong> - komponent jest dodany do drzewa DOM wywoływane są funkcje:
          <br />
          - constructor()
          <br />
          - componentWillMount()
          <br />
          - render()
          <br />
          - componentDidMount()
          <br />
          <br />
          2. <strong>Update-u</strong> - zmiana właściwości (ang. props) powoduje, że powinien zmienić swój stan wywoływane są funkcje:
          <br />
          - componentWillReceiveProps()
          <br />
          - shouldComponentUpdate()
          <br />
          - componentWillUpdate()
          <br />
          - render()
          <br />
          - componentDidUpdate()
          <br />
          <br />
          3. <strong>Odmontowywania</strong> - komponent jest usuwany z drzewa DOM wywoływana jest funkcja:
          <br />
          - componentWillUnmount()
          <br />
          <br />
          Dodatkowo jest jeszcze jedna funkcja dodana w React 16 - componentDidCatch, który wywołuje się, gdy w funkcji render zostanie wyrzucony
          wyjątek, niestety nie działa razem z funkcjami obsługi zdarzeń.
        </p>
      ),
      type: "React",
    },
    {
      id: 10,
      title: "Co to jest Flux i jaka jest różnica między Flux, a Redux?",
      body: (
        <p>
          Flux jest to architektura aplikacji zaproponowana przez Facebook-a, twórcy frameworka React.js. Flux nie jest to konkretna biblioteka ale
          architektura, której głównym elementem jest funkcja Dispatcher, A całość używa architektury podobnej do Publish/Subscribe lub EventEmitter.
          Flux korzysta z jedno kierunkowego przepływu danych w celu utrzymywania stanu aplikacji.
          <br />
          <br />I o ile Flux jest to nazwa architektury to Redux jest to już biblioteka, która implementuje ją tą.
        </p>
      ),
      type: "React",
    },
    {
      id: 11,
      title: "Jak działa Redux?",
      body: (
        <p>
          Biblioteka ta składa się z takich elementów jak Stan aplikacji (ang. store), reducer-y oraz akcje (actions).
          <br />
          <br />
          <ul>
            <li>Reducer jest to funkcja, która zwraca nowy stan bazując na starym. Przyjmuje dwa argumenty, poprzedni stan oraz akcje,</li>
            <li>Akcje są to obiekty, które zostają przekazane do reducer-a, na podstawie ich typu powinien być zwrócony inny nowy stan aplikacji</li>
            <li>
              Store jest to obiekt który posiada mi. takie funkcje:
              <br />
              - getState - zwraca aktualny stan <br />
              - subscribe - służy do dodawania nowej funkcji, która zostanie wywołana, gdy zmieni się stan <br />
              - dispatch - do funkcji przekazujemy akcje i zostanie zmieniony stan <br />
            </li>
          </ul>
          <br />
          <br />
          Biblioteka działa niezależnie od jakiegokolwiek frameworka. Można jej np. używać z Angular-em. Aby użyć biblioteki razem z React-em, należy
          dodatkowo użyć biblioteki ReactRedux oraz użyć jej dwóch funkcji connect oraz Provider.
          <br />
          <br />
          Provider jest to komponent, który posiada właściwość o nazwie store, który udostępnia stan aplikacji komponentom, działa tak jak
          ErrorBoundary (tzn. że Provider to komponent, który opakowuje inne komponenty) i korzysta z Context API React-a. Natomiast funkcja connect,
          służy jako wrapper komponentów. Przekazuje się do niej dwie funkcje: <br />
          <br />
          <ul>
            <li>mapStateToProps - jest to funkcja, która dostaje jako argument, stan aplikacji i zwraca obiekt bazujący na stanie</li>
            <li>
              mapDispatchToProps - jest to funkcja, która dostaje dispatch Reduxa jako argument i zwraca obiekt z funkcjami, które wywołują dispatch z
              odpowiednimi akcjami czyli dodają funkcje zmiany stanu aplikacji.
            </li>
          </ul>
          <br />
          <br />
          Funkcja connect, jest to komponent wyższego poziomu czyli jest to funkcja która przyjmuje zwykły komponent i zwraca nowy komponent, który ma
          dostęp do stanu z Reduxa, poprzez dwie funkcje:
          <br />
          - mapStateToProps
          <br />- mapDispatchToProps
        </p>
      ),
      type: "React",
    },
    {
      id: 12,
      title: "Co to jest Flux i jaka jest różnica między Flux, a Redux?",
      body: (
        <p>
          Context API oraz Redux, który w nowszej wersji korzysta z Context API, można używać do zminimalizowania wielokrotnego dziedziczenia propsów
          (Nazwane po angielsku prop drilling albo threading), gdy jest potrzeba utrzymywania stanu w aplikacji w wielu komponentach. Context API
          umożliwia stworzenie lokalnego stanu, który będzie dziedziczony przez inne komponenty w drzewie, pomijając komponenty, które go nie
          potrzebują. Dlatego właśnie z został użyty w bibliotece Redux. Działa tak jak zasięg funkcyjny (ang. scope), wszystkie funkcje wewnątrz mają
          dostęp do wszystkich zasięgów powyżej.
          <br />
          <br />
          Context API udostępnia funkcje React.createContext, która tworzy obiekt z dwoma komponentami: obiekt.Provider oraz obiekt.Consumer.
          Przykładem niech będzie przypadek, gdy musimy dodać internacjonalizacje do naszej aplikacji i wszystkie buttony muszą mieć przetłumaczony
          text. Nasze przyciski znajdują się na różnym poziomie w drzewie DOM. Zakładając, że nie korzystamy z Reduxa, bez Context Api musielibyśmy
          przekazywać propsy z językiem do każdego komponentu, aby dostał go każdy przycisk. Za pomocą Context API można to uprościć:
        </p>
      ),
      type: "React",
    },
    {
      id: 13,
      title: "Co to są kontrolowane komponenty?",
      body: (
        <p>
          Są to komponenty np. elementy formularzy input, select lub textarea, których wartość (właściwość value) pochodzi od React-a dlatego, gdy ich
          stan się zmieni wyrenderują się ponownie z nowych stanem (oczywiście dzięki Virtual DOM nie zostanie utworzony nowy element tylko zmieni się
          jego właściwość value). Jest to realizowane w taki sposób że pod value jest np. wartość ze state a event np. onChange lub onKeyUp zmienia
          ten stan.
          <br />
          <br />
          Kontrolowane mogą być także własne komponenty, gdzie wartość komponentu pobierana jest z zewnątrz np. z propsów. Komponent nie koniecznie
          musi renderować się od nowa po zmianie stanu. Może także uaktualnić się w inny sposób, np. gdy jest to komponent opakowujący jakąś
          bibliotekę.
        </p>
      ),
      type: "React",
    },
    {
      id: 14,
      title: "Jak działa Wirtualny DOM?",
      body: (
        <p>
          Wirtualny DOM jest to reprezentacja (w pamięci) prawdziwego drzewa DOM. Operacje wykonywane są na Wirtualnym DOM i gdy coś się zmieni,
          wykonywane jest porównywanie drzew (ang. diff), a następnie najmniejsza liczba akcji potrzebna do tego aby oba drzewa były takie same.
          <br />
          <br />
          Algorytm, który używa React w celu uaktualnienia natywnego DOM, nazywany jest po angielsku reconciliation, co można przetłumaczyć jako
          pojednanie.
        </p>
      ),
      type: "React",
    },
    {
      id: 15,
      title: "Czym się różni komponent od elementu?",
      body: (
        <p>
          Komponent jest to funkcja albo klasa dziedzicząca po React.Component, która ma jakąś logikę lub/i zawiera inne komponenty oraz elementy.
          Natomiast element jest to obiekt, który ma swój odpowiednik w DOM np. div, span albo input.
          <br />
          <br />
          Jest to jednak uproszczenie myślowe ponieważ sam React nie używa DOM dopiero dodatkowa biblioteka ReactDOM dodaje taką możliwość, jednak nie
          ma wątpliwości że Elementem będzie także Web Komponentem, ponieważ on także będzie miał swój odpowiednik w DOM.
          <br />
          <br />
          Elementy występują tylko w JSX, w wynikowym JavaScript-cie zostają zastąpione przez wywołanie funkcji React.createElement, gdzie pierwszy
          argument to nazwa taga.
        </p>
      ),
      type: "React",
    },
    {
      id: 16,
      title: "Do czego służy setState?",
      body: (
        <p>
          Metoda ta służy do zmiany wewnętrznego stanu komponentu, samo przypisanie do this.state nowego stanu albo zmiana wartości jednej z jego
          właściwości nie sprawi, że komponent się re-renderuje.
          <br />
          <br />
          Stan komponentu najczęściej stosuje się gdy nie potrzebujemy wysyłać go na zewnątrz komponentu. W przeciwnym przypadku raczej trzeba by
          zastosować Reduxa albo Context API.
        </p>
      ),
      type: "React",
    },
  ],
};

export const listButtons = ["javascript", "css", "html", "react"];
