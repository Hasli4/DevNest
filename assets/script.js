(function () {
  const storageKey = 'devnest-presentation-lang';
  const defaultLanguage = 'ru';

  const translations = {
    ru: {
      common: {
        brandTag: 'Конструктор портфолио для разработчиков',
        navHome: 'Главная',
        navFeatures: 'Возможности',
        navWorkflow: 'Процесс',
        navScreens: 'Скриншоты',
        navGuide: 'Инструкция',
        repo: 'GitHub',
        download: 'Скачать',
        openGuide: 'Открыть инструкцию',
        footerText: 'Desktop-приложение для создания портфолио разработчика и экспорта в статический сайт.',
        pageTitleHome: 'DevNest Portfolio — сайт-презентация',
        pageTitleGuide: 'DevNest Portfolio — инструкция',
        zoomHint: 'Нажмите, чтобы увеличить',
        downloadEyebrow: 'Где скачать',
        downloadTitle: 'Выберите удобный источник загрузки — официальный релиз или прямое облачное зеркало',
        downloadLead: 'Все три варианта ведут к portable-версии приложения. Выбирайте тот способ, который удобнее именно вам.',
        downloadGithubTitle: 'GitHub Release',
        downloadGithubText: 'Подойдёт, если вы хотите скачать приложение с официальной страницы релиза и сразу увидеть версию.',
        downloadYandexTitle: 'Яндекс Диск',
        downloadYandexText: 'Удобный альтернативный вариант, если комфортнее скачивать архив через Яндекс Диск.',
        downloadDriveTitle: 'Google Drive',
        downloadDriveText: 'Ещё один прямой источник загрузки, если вам удобнее работать через Google Drive.',
        downloadAction: 'Открыть источник'
      },
      home: {
        heroEyebrow: 'Desktop-приложение + статический экспорт',
        heroTitle: 'Соберите портфолио разработчика как продукт, а не как бесконечный ручной макет',
        heroLead: 'DevNest Portfolio помогает аккуратно оформить темы, проекты, описания, фото, обложки и экспортировать всё в готовый сайт, который можно открыть локально или опубликовать на GitHub Pages.',
        badgeWindows: 'Windows 10 / 11',
        badgeStatic: 'Полностью статический экспорт',
        badgeLocal: 'Локальное хранение данных',
        badgeLang: 'RU / EN + двуязычный режим',
        visualAdmin: 'Рабочая панель',
        visualAdminCaption: 'Управление проектами, темами и профилем',
        visualExport: 'Готовый результат',
        visualExportCaption: 'Сайт уже готов к публикации',
        audienceEyebrow: 'Для кого',
        audienceTitle: 'Подходит тем, кто хочет показать работу, а не бороться с вёрсткой',
        audience1Title: 'Junior и middle разработчики',
        audience1Text: 'Быстро собирают аккуратное портфолио без отдельного шаблона и CMS.',
        audience2Title: 'Студенты и выпускники',
        audience2Text: 'Показывают учебные и pet-проекты в понятной структуре.',
        audience3Title: 'Фрилансеры и digital-специалисты',
        audience3Text: 'Собирают кейсы по направлениям и быстро готовят ссылку для клиента.',
        solveEyebrow: 'Какие задачи решает',
        solveTitle: 'От хаотичных заметок и папок к цельному портфолио',
        solve1: 'Собирает проекты по темам и направлениям.',
        solve2: 'Хранит описания, ссылки, обложки и профиль локально на компьютере.',
        solve3: 'Помогает экспортировать всё в отдельный статический сайт без сервера.',
        solve4: 'Упрощает подготовку русской и английской версий портфолио.',
        whyEyebrow: 'Почему это удобнее',
        whyTitle: 'DevNest убирает рутину, которая обычно съедает время при ручной сборке портфолио',
        manualLabel: 'Ручной путь',
        manual1: 'Отдельно редактировать тексты, изображения и структуру страниц.',
        manual2: 'Следить за папками, путями и копированием файлов.',
        manual3: 'Дублировать контент при подготовке русской и английской версии.',
        productLabel: 'С DevNest',
        product1: 'Всё заполняется через одну понятную админ-панель.',
        product2: 'Фото и обложки копируются и хранятся автоматически.',
        product3: 'Экспорт даёт готовый автономный сайт и аккуратную структуру файлов.',
        workflowEyebrow: 'Как выглядит процесс',
        workflowTitle: 'Четыре понятных шага от пустого окна до готового сайта',
        step1Title: 'Заполните профиль',
        step1Text: 'Добавьте имя, короткое био и фото, чтобы сразу сформировать основу портфолио.',
        step2Title: 'Создайте темы',
        step2Text: 'Разделите работы по направлениям: frontend, дизайн, обучение, pet-проекты и не только.',
        step3Title: 'Добавьте карточки проектов',
        step3Text: 'Укажите название, описание, ссылку, доп. информацию и при желании обложку.',
        step4Title: 'Экспортируйте сайт',
        step4Text: 'Получите отдельную папку с HTML, CSS, JS и изображениями, готовую к публикации.',
        screenEyebrow: 'Скриншоты',
        screenTitle: 'Интерфейс не перегружает: всё основное видно сразу',
        screen1Title: 'Админ-панель',
        screen1Text: 'Профиль, темы, проекты, экспорт и поиск находятся в одном рабочем пространстве.',
        screen2Title: 'Экспортированный сайт',
        screen2Text: 'Чистый внешний вид, статическая структура и готовность к размещению на хостинге.',
        featureEyebrow: 'Ключевые возможности',
        featureTitle: 'Набор функций, который закрывает весь путь создания портфолио',
        feature1Title: 'Темы и структура',
        feature1Text: 'Создавайте тематические блоки и держите проекты в понятной системе.',
        feature2Title: 'Карточки проектов',
        feature2Text: 'Добавляйте названия, описания, ссылки, доп. поля и обложки без ручной сборки HTML.',
        feature3Title: 'Профиль разработчика',
        feature3Text: 'Фото и био формируют узнаваемый верхний блок и наглядно представляют автора.',
        feature4Title: 'Локальное хранение',
        feature4Text: 'Данные и изображения сохраняются на компьютере и не требуют облачного сервиса.',
        feature5Title: 'RU / EN и двуязычность',
        feature5Text: 'Переключайте язык интерфейса и при необходимости готовьте двуязычную версию портфолио.',
        feature6Title: 'Статический экспорт',
        feature6Text: 'Итоговый сайт не требует базы данных и может жить как отдельный набор файлов.',
        ctaEyebrow: 'Готово к старту',
        ctaTitle: 'Откройте приложение, соберите первые карточки и экспортируйте сайт уже сегодня'
      },
      guide: {
        navInstall: 'Установка',
        navUsage: 'Использование',
        navExport: 'Экспорт',
        eyebrow: 'Установка и работа',
        title: 'Пошаговая инструкция: от первого запуска до готового сайта',
        lead: 'Ниже собран спокойный маршрут по установке portable-версии, работе с темами и проектами, настройке языков и экспорту итогового портфолио.',
        startInstall: 'Начать с установки',
        quickTitle: 'Коротко о процессе',
        quick1: 'Скачать portable-версию и распаковать архив.',
        quick2: 'Заполнить профиль разработчика.',
        quick3: 'Создать темы и карточки проектов.',
        quick4: 'При необходимости включить двуязычный режим.',
        quick5: 'Экспортировать сайт и открыть папку результата.',
        installEyebrow: 'Установка',
        installTitle: 'Как установить portable-версию на Windows',
        install1Title: 'Проверьте версию Windows',
        install1Text: 'Приложение рассчитано на Windows 10 и Windows 11. Если на компьютере другая версия системы, работа не гарантируется.',
        install2Title: 'Скачайте архив с приложением',
        install2Text: 'Откройте страницу релиза или одно из зеркал, скачайте portable-версию и дождитесь завершения загрузки.',
        install3Title: 'Распакуйте архив в удобную папку',
        install3Text: 'Подойдут «Документы» или любая другая рабочая директория, в которой вам удобно хранить программу и экспортируемые сайты.',
        install4Title: 'Запустите portable exe',
        install4Text: 'Откройте распакованную папку и запустите файл приложения. При желании создайте ярлык на рабочем столе.',
        install4Note: 'ПКМ → Отправить → Рабочий стол (создать ярлык)',
        installTipTitle: 'Подсказка для Windows 11',
        installTipText: 'Если в контекстном меню не видно создания ярлыка, нажмите «Показать дополнительные параметры» или запускайте приложение напрямую из папки.',
        usageEyebrow: 'Использование',
        usageTitle: 'Как пользоваться приложением после запуска',
        usageLead: 'Ниже собран короткий пошаговый walkthrough. Переключайте шаги и смотрите на соответствующую зону интерфейса.',
        use1Title: '1. Заполните профиль разработчика',
        use1Text: 'Слева находится карточка профиля: введите имя, краткое био и выберите фото. После этого нажмите кнопку сохранения профиля.',
        use1Nav: 'Имя, био и фото',
        step1Kicker: 'Шаг 01',
        use1VisualTitle: 'Профиль разработчика',
        use1VisualText: 'Сначала заполните имя, фото и короткое био. Этот блок сразу формирует верхнюю часть будущего портфолио.',
        use2Title: '2. Создайте тему',
        use2Text: 'Нажмите «Создать тему», укажите название направления и сохраните его. Темы помогают держать проекты в аккуратной структуре.',
        use2Nav: 'Структура и экспорт',
        step2Kicker: 'Шаг 02',
        use2VisualTitle: 'Темы и быстрые действия',
        use2VisualText: 'В этой зоне вы создаёте темы, запускаете экспорт и открываете папку с итоговым сайтом.',
        use3Title: '3. Создайте карточку проекта',
        use3Text: 'Откройте тему, нажмите «Создать проект» и заполните название, описание, ссылку, дополнительную информацию и обложку.',
        use3Nav: 'Описание, ссылка и обложка',
        step3Kicker: 'Шаг 03',
        use3VisualTitle: 'Карточки проектов',
        use3VisualText: 'После выбора темы рабочая область превращается в место, где живут обложки, описания, ссылки и действия по проекту.',
        use4Title: '4. Повторите для остальных работ',
        use4Text: 'Добавляйте новые темы и проекты по мере необходимости. Поиск помогает быстро найти карточку в текущем направлении.',
        use4Nav: 'Поиск и навигация',
        step4Kicker: 'Шаг 04',
        use4VisualTitle: 'Полная рабочая картина',
        use4VisualText: 'Когда проектов становится больше, помогает связка из тем, поиска и единой рабочей области без лишних переходов.',
        mapEyebrow: 'Карта интерфейса',
        mapTitle: 'Карта интерфейса',
        mapText: 'Ниже — ориентир по ключевым зонам приложения. Если хотите спокойно рассмотреть интерфейс, откройте схему в полном размере.',
        mapHint: 'Схема автоматически подстраивается под текущий язык страницы: русская версия показывает русские подписи, английская — английские.',
        mapProfileTitle: 'Профиль разработчика',
        mapProfileText: 'Сюда добавляются имя, фото и био. Этот блок сразу влияет на внешний вид итогового портфолио.',
        mapControlsTitle: 'Верхняя панель и язык',
        mapControlsText: 'Здесь находятся создание темы, экспорт, открытие папки и переключение интерфейса `RU / EN`.',
        mapWorkspaceTitle: 'Рабочая область проектов',
        mapWorkspaceText: 'После выбора темы здесь появляются поиск, счётчики и карточки проектов, которые можно быстро редактировать.',
        funcEyebrow: 'Основные функции',
        funcTitle: 'Что именно умеет приложение внутри рабочего процесса',
        func1Title: 'Темы',
        func1Text: 'Нужны для разделения проектов по направлениям и удобной навигации внутри портфолио.',
        func2Title: 'Карточки проектов',
        func2Text: 'Содержат весь основной контент: название, описание, ссылку, доп. поле и обложку.',
        func3Title: 'Фото и обложки',
        func3Text: 'Изображения выбираются с компьютера и копируются в локальное хранилище приложения.',
        func4Title: 'Поиск',
        func4Text: 'Ускоряет работу, когда проектов внутри темы становится больше.',
        langEyebrow: 'Языки',
        langTitle: 'Как работает переключение языка и двуязычный экспорт',
        langSingleLabel: 'Обычный режим',
        langSingle1: 'Переключатель `RU / EN` меняет язык интерфейса приложения.',
        langSingle2: 'Если двуязычный режим выключен, экспортированный сайт будет собран на выбранном в этот момент языке.',
        langSingle3: 'Это удобный вариант, если вам нужна одна конкретная версия портфолио.',
        langDualLabel: 'Двуязычный режим',
        langDual1: 'Включите «Поддержка двух языков», чтобы появились поля для русского и английского текста.',
        langDual2: 'Заполните обе версии названий, описаний и профиля разработчика.',
        langDual3: 'При экспорте сайт получит собственный переключатель языка и останется полностью статическим.',
        exportEyebrow: 'Экспорт',
        exportTitle: 'Как получить готовый сайт и что происходит после нажатия кнопки',
        export1Title: 'Нажмите «Экспортировать сайт»',
        export1Text: 'Приложение соберёт отдельную папку с HTML, CSS, JS, JSON и всеми нужными изображениями.',
        export2Title: 'Откройте папку результата',
        export2Text: 'Кнопка открытия папки переводит вас сразу к последнему экспортированному сайту.',
        export3Title: 'Запустите `index.html`',
        export3Text: 'Так можно быстро проверить результат локально в браузере до публикации.',
        export4Title: 'Загрузите сайт на хостинг',
        export4Text: 'Экспорт подходит для обычного статического размещения, в том числе на GitHub Pages.',
        storageTitle: 'Как сохраняются данные',
        storageText: 'Проекты, темы, фото, обложки и настройки языка хранятся локально в пользовательской папке приложения. Это позволяет не терять данные после перезапуска.',
        coverTitle: 'Что важно знать про фото и обложки',
        coverText: 'Когда вы выбираете изображение, приложение копирует его в собственное локальное хранилище. Поэтому исходный файл можно хранить где угодно, а экспорт всё равно соберётся корректно.',
        visual2Title: 'Финальный сайт',
        visual2Text: 'После экспорта остаётся открыть папку, проверить `index.html` и при необходимости загрузить сайт на хостинг.',
        ctaEyebrow: 'Следующий шаг',
        ctaTitle: 'Можно начинать с одного направления и пары проектов, а потом спокойно расширять портфолио дальше'
      }
    },
    en: {
      common: {
        brandTag: 'Portfolio builder for developers',
        navHome: 'Home',
        navFeatures: 'Features',
        navWorkflow: 'Workflow',
        navScreens: 'Screenshots',
        navGuide: 'Guide',
        repo: 'GitHub',
        download: 'Download',
        openGuide: 'Open guide',
        footerText: 'Desktop app for building a developer portfolio and exporting it as a static website.',
        pageTitleHome: 'DevNest Portfolio — product website',
        pageTitleGuide: 'DevNest Portfolio — guide',
        zoomHint: 'Click to enlarge',
        downloadEyebrow: 'Downloads',
        downloadTitle: 'Choose the source that suits you best — official release or direct cloud mirror',
        downloadLead: 'All three options point to the same portable app build. Pick the source that feels most convenient for you.',
        downloadGithubTitle: 'GitHub Release',
        downloadGithubText: 'Best if you want the official release page, version info, and release notes in one place.',
        downloadYandexTitle: 'Yandex Disk',
        downloadYandexText: 'A convenient alternative if downloading the archive from Yandex Disk works better for you.',
        downloadDriveTitle: 'Google Drive',
        downloadDriveText: 'One more direct download source if you prefer working through Google Drive.',
        downloadAction: 'Open source'
      },
      home: {
        heroEyebrow: 'Desktop app + static website export',
        heroTitle: 'Build your developer portfolio like a product, not like an endless manual layout task',
        heroLead: 'DevNest Portfolio helps you organize topics, projects, descriptions, profile info, covers, and export everything into a ready-to-publish website that works locally or on GitHub Pages.',
        badgeWindows: 'Windows 10 / 11',
        badgeStatic: 'Fully static export',
        badgeLocal: 'Local data storage',
        badgeLang: 'RU / EN + bilingual mode',
        visualAdmin: 'Admin workspace',
        visualAdminCaption: 'Manage projects, themes, and developer profile',
        visualExport: 'Static output',
        visualExportCaption: 'The website is already ready to publish',
        audienceEyebrow: 'Who it is for',
        audienceTitle: 'Great for people who want to show their work instead of fighting the layout',
        audience1Title: 'Junior and middle developers',
        audience1Text: 'Create a clean portfolio quickly without building a separate template or CMS setup.',
        audience2Title: 'Students and graduates',
        audience2Text: 'Present academic and pet projects in a structure that feels clear and professional.',
        audience3Title: 'Freelancers and digital specialists',
        audience3Text: 'Group cases by direction and prepare a polished link for clients faster.',
        solveEyebrow: 'What it solves',
        solveTitle: 'From scattered notes and folders to one coherent portfolio',
        solve1: 'Groups projects by themes and directions.',
        solve2: 'Keeps descriptions, links, covers, and profile data locally on the computer.',
        solve3: 'Exports everything into a static website with no server required.',
        solve4: 'Makes it easier to prepare Russian and English portfolio versions.',
        whyEyebrow: 'Why it is easier',
        whyTitle: 'DevNest removes the routine that usually eats time when building a portfolio by hand',
        manualLabel: 'Manual path',
        manual1: 'Editing text, images, and page structure separately.',
        manual2: 'Tracking folders, paths, and copied assets manually.',
        manual3: 'Duplicating content when preparing Russian and English versions.',
        productLabel: 'With DevNest',
        product1: 'Everything is managed from one clear admin panel.',
        product2: 'Photos and covers are copied and stored automatically.',
        product3: 'Export gives you a ready autonomous website with a tidy file structure.',
        workflowEyebrow: 'How it works',
        workflowTitle: 'Four clear steps from an empty window to a finished website',
        step1Title: 'Fill in your profile',
        step1Text: 'Add your name, short bio, and photo to create the foundation of the portfolio.',
        step2Title: 'Create themes',
        step2Text: 'Split your work into directions like frontend, design, study projects, or pet projects.',
        step3Title: 'Add project cards',
        step3Text: 'Enter title, description, link, extra info, and an optional cover image.',
        step4Title: 'Export the website',
        step4Text: 'Get a separate folder with HTML, CSS, JS, and images ready for publishing.',
        screenEyebrow: 'Screenshots',
        screenTitle: 'The interface stays clear: the essentials are visible right away',
        screen1Title: 'Admin panel',
        screen1Text: 'Profile, themes, projects, export, and search are gathered in one workspace.',
        screen2Title: 'Exported website',
        screen2Text: 'A clean front-end, static structure, and ready-to-host output.',
        featureEyebrow: 'Key features',
        featureTitle: 'A feature set that covers the full portfolio creation flow',
        feature1Title: 'Themes and structure',
        feature1Text: 'Create topic-based groups and keep projects in a clear system.',
        feature2Title: 'Project cards',
        feature2Text: 'Add titles, descriptions, links, extra fields, and covers without hand-writing HTML.',
        feature3Title: 'Developer profile',
        feature3Text: 'Photo and bio create a recognizable top section and introduce the author clearly.',
        feature4Title: 'Local storage',
        feature4Text: 'Data and images stay on your computer and do not require a cloud service.',
        feature5Title: 'RU / EN and bilingual mode',
        feature5Text: 'Switch the interface language and prepare a bilingual portfolio when needed.',
        feature6Title: 'Static export',
        feature6Text: 'The final website needs no database and can live as a simple set of files.',
        ctaEyebrow: 'Ready to start',
        ctaTitle: 'Open the app, create your first project cards, and export a portfolio website today'
      },
      guide: {
        navInstall: 'Install',
        navUsage: 'Usage',
        navExport: 'Export',
        eyebrow: 'Install & use guide',
        title: 'Step-by-step guide: from first launch to finished website',
        lead: 'This page gives you a calm walkthrough of installing the portable version, working with themes and projects, using language settings, and exporting the final portfolio.',
        startInstall: 'Start with installation',
        quickTitle: 'Quick overview',
        quick1: 'Download the portable version and extract the archive.',
        quick2: 'Fill in the developer profile.',
        quick3: 'Create themes and project cards.',
        quick4: 'Enable bilingual mode if you need two languages.',
        quick5: 'Export the site and open the result folder.',
        installEyebrow: 'Installation',
        installTitle: 'How to install the portable version on Windows',
        install1Title: 'Check your Windows version',
        install1Text: 'The app is designed for Windows 10 and Windows 11. Other versions are not guaranteed to work correctly.',
        install2Title: 'Download the app archive',
        install2Text: 'Open the release page or one of the mirror sources, download the portable build, and wait until the archive is fully saved.',
        install3Title: 'Extract it into a convenient folder',
        install3Text: 'Documents or any other working folder is fine as long as it is comfortable for keeping the app and exported websites.',
        install4Title: 'Launch the portable exe',
        install4Text: 'Open the extracted folder and run the application file. If you want, create a desktop shortcut.',
        install4Note: 'Right-click → Send to → Desktop (create shortcut)',
        installTipTitle: 'Tip for Windows 11',
        installTipText: 'If the shortcut action is hidden, click "Show more options" in the context menu or simply launch the app directly from the folder.',
        usageEyebrow: 'Usage',
        usageTitle: 'How to use the application after launch',
        usageLead: 'Below is a short step-by-step walkthrough. Switch between the steps and focus on the matching part of the interface.',
        use1Title: '1. Fill in the developer profile',
        use1Text: 'The profile card is on the left. Enter your name, a short bio, and choose a photo, then save the profile.',
        use1Nav: 'Name, bio, and photo',
        step1Kicker: 'Step 01',
        use1VisualTitle: 'Developer profile',
        use1VisualText: 'Start with your name, photo, and short bio. This block immediately shapes the top part of the future portfolio.',
        use2Title: '2. Create a theme',
        use2Text: 'Click "Create theme", enter the name of the direction, and save it. Themes keep the portfolio structured and readable.',
        use2Nav: 'Structure and export',
        step2Kicker: 'Step 02',
        use2VisualTitle: 'Themes and quick actions',
        use2VisualText: 'This area is used to create themes, launch export, and open the folder with the final site.',
        use3Title: '3. Create a project card',
        use3Text: 'Open a theme, click "Create project", and fill in the title, description, link, extra information, and cover image.',
        use3Nav: 'Description, link, and cover',
        step3Kicker: 'Step 03',
        use3VisualTitle: 'Project cards',
        use3VisualText: 'Once a theme is selected, the workspace becomes the place where covers, descriptions, links, and project actions live.',
        use4Title: '4. Repeat for the rest of your work',
        use4Text: 'Add more themes and projects as needed. Search helps when a direction starts to contain many cards.',
        use4Nav: 'Search and navigation',
        step4Kicker: 'Step 04',
        use4VisualTitle: 'Full workspace view',
        use4VisualText: 'As the portfolio grows, the combination of themes, search, and one shared workspace helps you stay oriented.',
        mapEyebrow: 'Interface map',
        mapTitle: 'Interface map',
        mapText: 'Below is a quick guide to the key areas of the app. Open the scheme in full size if you want to inspect the interface calmly.',
        mapHint: 'The scheme automatically follows the current page language: the Russian page shows Russian labels, and the English page shows English ones.',
        mapProfileTitle: 'Developer profile',
        mapProfileText: 'This area stores your name, photo, and bio. It directly affects the top section of the final portfolio.',
        mapControlsTitle: 'Top controls and language',
        mapControlsText: 'This row contains theme creation, export, open-folder actions, and the `RU / EN` interface switch.',
        mapWorkspaceTitle: 'Project workspace',
        mapWorkspaceText: 'After choosing a theme, this area shows search, counters, and project cards that can be edited quickly.',
        funcEyebrow: 'Core functions',
        funcTitle: 'What the app actually does inside the workflow',
        func1Title: 'Themes',
        func1Text: 'Used to split projects by direction and make the portfolio easier to navigate.',
        func2Title: 'Project cards',
        func2Text: 'Store the main content: title, description, link, extra field, and cover.',
        func3Title: 'Photos and covers',
        func3Text: 'Images are selected from your computer and copied into the app local storage.',
        func4Title: 'Search',
        func4Text: 'Speeds up navigation when there are more projects inside a theme.',
        langEyebrow: 'Languages',
        langTitle: 'How the language switch and bilingual export work',
        langSingleLabel: 'Standard mode',
        langSingle1: 'The `RU / EN` switch changes the application interface language.',
        langSingle2: 'If bilingual mode is disabled, the exported website is generated in the language selected at export time.',
        langSingle3: 'This is the most convenient option when you only need one language version.',
        langDualLabel: 'Bilingual mode',
        langDual1: 'Enable "Two-language support" to reveal fields for both Russian and English text.',
        langDual2: 'Fill in both versions of titles, descriptions, and developer profile content.',
        langDual3: 'When exported, the website gets its own language switch and still remains fully static.',
        exportEyebrow: 'Export',
        exportTitle: 'How to get the final website and what happens after pressing export',
        export1Title: 'Click "Export site"',
        export1Text: 'The app creates a separate folder with HTML, CSS, JS, JSON, and all required images.',
        export2Title: 'Open the result folder',
        export2Text: 'The open-folder button takes you directly to the latest exported website.',
        export3Title: 'Run `index.html`',
        export3Text: 'This is the fastest way to preview the final result locally in a browser before publishing.',
        export4Title: 'Upload it to hosting',
        export4Text: 'The exported output is suitable for normal static hosting, including GitHub Pages.',
        storageTitle: 'How data is stored',
        storageText: 'Projects, themes, photos, covers, and language settings are stored locally in the user directory of the app. This helps you keep data after restarting.',
        coverTitle: 'What to know about photos and covers',
        coverText: 'When you choose an image, the app copies it into its own local storage. Because of that, export still works even if the original file was stored elsewhere.',
        visual2Title: 'Final website',
        visual2Text: 'After export, you only need to open the folder, check `index.html`, and upload the website if you want to publish it.',
        ctaEyebrow: 'Next step',
        ctaTitle: 'You can start with one direction and a couple of projects, then expand the portfolio calmly over time'
      }
    }
  };

  const nodes = document.querySelectorAll('[data-i18n]');
  const langToggles = document.querySelectorAll('[data-lang-toggle]');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = lightbox ? lightbox.querySelector('.lightbox__image') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox__close') : null;
  const lightboxBackdrop = lightbox ? lightbox.querySelector('.lightbox__backdrop') : null;
  const zoomTriggers = document.querySelectorAll('[data-lightbox-src]');
  const usageTriggers = document.querySelectorAll('[data-usage-trigger]');
  const usagePanels = document.querySelectorAll('[data-usage-panel]');

  function resolve(obj, key) {
    return key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), obj);
  }

  function applyLanguage(language) {
    const dictionary = translations[language] || translations[defaultLanguage];
    const page = document.body.getAttribute('data-page');

    document.documentElement.lang = language;
    document.body.dataset.language = language;
    document.title = resolve(dictionary, page === 'guide' ? 'common.pageTitleGuide' : 'common.pageTitleHome') || 'DevNest Portfolio';

    nodes.forEach((node) => {
      const key = node.getAttribute('data-i18n');
      const value = resolve(dictionary, key);
      if (typeof value === 'string') {
        node.textContent = value;
      }
    });

    langToggles.forEach((toggle) => {
      toggle.dataset.currentLang = language;
      toggle.setAttribute('aria-checked', language === 'en' ? 'true' : 'false');
    });

    localStorage.setItem(storageKey, language);
  }

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImage || !src) {
      return;
    }

    lightboxImage.src = src;
    lightboxImage.alt = alt || '';
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImage) {
      return;
    }

    lightbox.hidden = true;
    lightboxImage.src = '';
    lightboxImage.alt = '';
    document.body.classList.remove('lightbox-open');
  }

  function activateUsageSlide(id) {
    if (!usageTriggers.length || !usagePanels.length) {
      return;
    }

    usageTriggers.forEach((trigger) => {
      const isActive = trigger.getAttribute('data-usage-trigger') === id;
      trigger.classList.toggle('is-active', isActive);
      trigger.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    usagePanels.forEach((panel) => {
      const isActive = panel.id === id;
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
    });
  }

  const savedLanguage = localStorage.getItem(storageKey);
  const initialLanguage = savedLanguage === 'en' ? 'en' : defaultLanguage;

  langToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const currentLanguage = document.body.dataset.language === 'en' ? 'en' : 'ru';
      const nextLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
      applyLanguage(nextLanguage);
    });
  });

  zoomTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const source = trigger.getAttribute('data-lightbox-src');
      const image = trigger.querySelector('img');
      const alt = trigger.getAttribute('data-lightbox-alt') || (image ? image.getAttribute('alt') : '');
      openLightbox(source, alt);
    });
  });

  usageTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      activateUsageSlide(trigger.getAttribute('data-usage-trigger'));
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener('click', closeLightbox);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox && !lightbox.hidden) {
      closeLightbox();
    }
  });

  applyLanguage(initialLanguage);
  activateUsageSlide('usage-slide-1');
})();
