<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#0A0A0F] text-gray-800 dark:text-gray-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <!-- Top bar -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <RouterLink to="/" class="flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400 hover:underline no-underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
          {{ labels.back[lang] }}
        </RouterLink>
        <div class="flex flex-wrap gap-2">
          <RouterLink
            v-for="l in languages"
            :key="l.code"
            :to="`/privacy/${l.code}`"
            class="px-3 py-1.5 text-xs font-medium rounded-full no-underline transition-all"
            :class="lang === l.code
              ? 'bg-violet-600 text-white'
              : 'bg-gray-200 dark:bg-[#2D2D4A] text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#3D3D5A]'"
          >
            {{ l.label }}
          </RouterLink>
        </div>
      </div>

      <!-- Content -->
      <article class="bg-white dark:bg-[#1A1A2E] rounded-2xl shadow-sm border border-gray-200 dark:border-[#2D2D4A] p-6 sm:p-10">
        <header class="border-b-4 border-violet-600 pb-6 mb-8">
          <h1 class="text-3xl sm:text-4xl font-bold dark:text-white">{{ content.title }}</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">{{ content.lastUpdated }}</p>
        </header>

        <div class="bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-600 p-5 rounded-r-xl mb-10">
          <strong class="text-violet-700 dark:text-violet-300">{{ content.highlight.title }}</strong>
          <p class="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{{ content.highlight.body }}</p>
        </div>

        <section v-for="(section, i) in content.sections" :key="i" class="mb-10">
          <h2 class="text-xl sm:text-2xl font-bold dark:text-white border-l-4 border-violet-600 pl-4 mb-4">{{ section.heading }}</h2>
          <p v-if="section.intro" class="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed" v-html="section.intro"></p>
          <ul v-if="section.items" class="space-y-2 ml-5">
            <li v-for="(item, j) in section.items" :key="j" class="text-gray-700 dark:text-gray-300 leading-relaxed list-disc" v-html="item"></li>
          </ul>
        </section>

        <footer class="mt-12 pt-6 border-t border-gray-200 dark:border-[#2D2D4A] text-center text-sm text-gray-400">
          <p>&copy; 2026 Talkie. {{ content.footer }}</p>
        </footer>
      </article>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const lang = computed(() => route.params.lang || 'en')

const languages = [
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'ru', label: 'Русский' },
  { code: 'zh', label: '简体中文' },
]

const labels = {
  back: { en: 'Back to Home', tr: 'Ana Sayfaya Dön', ru: 'На главную', zh: '返回首页' },
}

const content = computed(() => privacyData[lang.value])

const privacyData = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: January 10, 2026',
    highlight: {
      title: 'Your Privacy is Our Priority',
      body: 'Talkie: WiFi Walkie Talkie works primarily on your local network. We do not collect, send, or share any personal data or audio recordings with outside servers. All communication happens directly between devices on the same WiFi network.',
    },
    sections: [
      {
        heading: '1. Data Collection',
        intro: 'Talkie <strong>does not collect any personal data</strong> on remote servers. Our app:',
        items: [
          'Works on your local WiFi network',
          'DOES NOT upload your voice to the internet or cloud',
          'DOES NOT store your audio recordings remotely',
          'Does not require account creation',
        ],
      },
      {
        heading: '2. Microphone Usage',
        intro: 'To function as a Walkie Talkie, this app requires access to your device\'s microphone.',
        items: [
          '<strong>Purpose:</strong> To capture your voice when you press the "Talk" button and verify voice activity.',
          '<strong>Transmission:</strong> Audio data is streamed in real-time to other devices on the <strong>same local WiFi network</strong> via UDP protocol.',
          '<strong>Storage:</strong> Audio data is transient and is NOT stored permanently on the device or any server.',
        ],
      },
      {
        heading: '3. Local Network Access',
        intro: 'The app requires access to your local network (LAN) to discover and communicate with other devices.',
        items: [
          '<strong>Discovery:</strong> We use mDNS/NSD to find other "Talkie" users on the same WiFi.',
          '<strong>Communication:</strong> Your device\'s IP address and a customizable Display Name are broadcasted locally to other users to enable connection.',
        ],
      },
      {
        heading: '4. Local Data Storage',
        intro: 'The app only stores the following preferences locally on your device:',
        items: [
          'Your chosen Display Name',
          'Theme preferences (Dark/Light/System)',
          'Language preferences',
        ],
        outro: 'This data remains on your device and is not shared.',
      },
      {
        heading: '5. Third-Party Services',
        intro: 'Talkie is designed to be self-sufficient and respects your privacy. We currently do not use third-party analytics or tracking services.',
      },
      {
        heading: '6. Children\'s Privacy',
        intro: 'Talkie is safe for users of all ages because:',
        items: [
          'No personal information is collected',
          'No contact with strangers outside your local WiFi network',
          'No age verification required',
        ],
      },
      {
        heading: '7. Data Security',
        intro: 'Since your communication is restricted to your local WiFi network:',
        items: [
          'Audio streams are not routed through the internet.',
          'Security relies on your local WiFi network\'s security (WPA2/WPA3 recommended).',
        ],
      },
      {
        heading: '8. Policy Changes',
        intro: 'We may update this privacy policy. Any changes will be posted on this page.',
      },
      {
        heading: '9. Contact',
        intro: 'For questions or concerns, please contact our support team.',
      },
    ],
    footer: 'All rights reserved.',
  },

  tr: {
    title: 'Gizlilik Politikası',
    lastUpdated: 'Son Güncelleme: 10 Ocak 2026',
    highlight: {
      title: 'Gizliliğiniz Önceliğimizdir',
      body: 'Talkie: WiFi Telsiz uygulaması esas olarak yerel ağınızda çalışır. Kişisel verilerinizi veya ses kayıtlarınızı dış sunuculara toplamaz, göndermez veya paylaşmaz. Tüm iletişim, aynı WiFi ağı üzerindeki cihazlar arasında doğrudan gerçekleşir.',
    },
    sections: [
      {
        heading: '1. Veri Toplama',
        intro: 'Talkie <strong>uzak sunucularda hiçbir kişisel veri toplamaz</strong>. Uygulamamız:',
        items: [
          'Yerel WiFi ağınızda çalışır',
          'Sesinizi internete veya buluta YÜKLEMEZ',
          'Ses kayıtlarınızı uzaktan SAKLAMAZ',
          'Hesap oluşturmanızı gerektirmez',
        ],
      },
      {
        heading: '2. Mikrofon Kullanımı',
        intro: 'Uygulamanın telsiz olarak çalışabilmesi için cihazınızın mikrofonuna erişim gereklidir.',
        items: [
          '<strong>Amacı:</strong> "Konuş" butonuna bastığınızda sesinizi almak ve ses etkinliğini doğrulamak.',
          '<strong>İletim:</strong> Ses verisi, <strong>aynı yerel WiFi ağı</strong> üzerindeki diğer cihazlara UDP protokolü ile gerçek zamanlı olarak iletilir.',
          '<strong>Saklama:</strong> Ses verisi geçicidir ve cihazda veya herhangi bir sunucuda KALICI olarak saklanmaz.',
        ],
      },
      {
        heading: '3. Yerel Ağ Erişimi',
        intro: 'Uygulama, diğer cihazları bulmak ve iletişim kurmak için yerel ağınıza (LAN) erişim ister.',
        items: [
          '<strong>Keşif:</strong> Aynı WiFi\'daki diğer "Talkie" kullanıcılarını bulmak için mDNS/NSD kullanılır.',
          '<strong>İletişim:</strong> Cihazınızın IP adresi ve özelleştirilebilir Görünen Adı, bağlantı sağlamak için yerel olarak diğer kullanıcılara yayınlanır.',
        ],
      },
      {
        heading: '4. Yerel Veri Saklama',
        intro: 'Uygulama yalnızca aşağıdaki tercihleri cihazınızda yerel olarak saklar:',
        items: [
          'Seçtiğiniz Görünen Ad',
          'Tema tercihleri (Koyu/Açık/Sistem)',
          'Dil tercihleri',
        ],
        outro: 'Bu veriler cihazınızda kalır ve paylaşılmaz.',
      },
      {
        heading: '5. Üçüncü Taraf Servisler',
        intro: 'Talkie, gizliliğinize saygı gösterecek şekilde tasarlanmıştır. Şu anda üçüncü taraf analiz veya takip servisleri kullanmamaktayız.',
      },
      {
        heading: '6. Çocukların Gizliliği',
        intro: 'Talkie, tüm yaş grupları için güvenlidir çünkü:',
        items: [
          'Kişisel bilgi toplanmaz',
          'Yerel WiFi ağı dışındaki yabancılarla iletişim kurulmaz',
          'Yaş doğrulaması gerekmez',
        ],
      },
      {
        heading: '7. Veri Güvenliği',
        intro: 'İletişiminiz yalnızca yerel WiFi ağı ile sınırlı olduğundan:',
        items: [
          'Ses akışları internete yönlendirilmez.',
          'Güvenlik, yerel WiFi ağınızın güvenliğine bağlıdır (WPA2/WPA3 önerilir).',
        ],
      },
      {
        heading: '8. Politika Değişiklikleri',
        intro: 'Bu gizlilik politikasında güncellemeler yapabiliriz. Herhangi bir değişiklik bu sayfada yayınlanacaktır.',
      },
      {
        heading: '9. İletişim',
        intro: 'Soru veya endişeleriniz için lütfen destek ekibimizle iletişime geçin.',
      },
    ],
    footer: 'Tüm hakları saklıdır.',
  },

  ru: {
    title: 'Политика конфиденциальности',
    lastUpdated: 'Последнее обновление: 10 января 2026',
    highlight: {
      title: 'Ваша конфиденциальность — наш приоритет',
      body: 'Talkie: WiFi Рация работает преимущественно в вашей локальной сети. Мы не собираем, не отправляем и не передаем ваши личные данные или аудиозаписи на внешние серверы. Вся связь происходит напрямую между устройствами в одной WiFi-сети.',
    },
    sections: [
      {
        heading: '1. Сбор данных',
        intro: 'Talkie <strong>не собирает никаких персональных данных</strong> на удалённых серверах. Наше приложение:',
        items: [
          'Работает в вашей локальной WiFi-сети',
          'НЕ загружает ваш голос в интернет или облако',
          'НЕ хранит ваши аудиозаписи удалённо',
          'Не требует создания аккаунта',
        ],
      },
      {
        heading: '2. Использование микрофона',
        intro: 'Для работы в режиме рации приложению необходим доступ к микрофону вашего устройства.',
        items: [
          '<strong>Цель:</strong> Захват вашего голоса при нажатии кнопки "Говорить" и определение активности голоса.',
          '<strong>Передача:</strong> Аудиоданные передаются в реальном времени другим устройствам в <strong>той же локальной WiFi-сети</strong> по протоколу UDP.',
          '<strong>Хранение:</strong> Аудиоданные временные и НЕ сохраняются постоянно ни на устройстве, ни на сервере.',
        ],
      },
      {
        heading: '3. Доступ к локальной сети',
        intro: 'Приложению необходим доступ к вашей локальной сети (LAN) для обнаружения и связи с другими устройствами.',
        items: [
          '<strong>Обнаружение:</strong> Для поиска других пользователей "Talkie" в одной WiFi используется mDNS/NSD.',
          '<strong>Связь:</strong> IP-адрес вашего устройства и настраиваемое отображаемое имя транслируются локально другим пользователям для установления соединения.',
        ],
      },
      {
        heading: '4. Локальное хранение данных',
        intro: 'Приложение хранит только следующие настройки локально на вашем устройстве:',
        items: [
          'Выбранное вами отображаемое имя',
          'Настройки темы (Тёмная/Светлая/Системная)',
          'Настройки языка',
        ],
        outro: 'Эти данные остаются на вашем устройстве и не передаются.',
      },
      {
        heading: '5. Сторонние сервисы',
        intro: 'Talkie разработан с уважением к вашей конфиденциальности. В настоящее время мы не используем сторонние сервисы аналитики или отслеживания.',
      },
      {
        heading: '6. Конфиденциальность детей',
        intro: 'Talkie безопасен для пользователей всех возрастов, потому что:',
        items: [
          'Личная информация не собирается',
          'Нет контакта с незнакомцами вне вашей локальной WiFi-сети',
          'Не требуется подтверждение возраста',
        ],
      },
      {
        heading: '7. Безопасность данных',
        intro: 'Поскольку ваша связь ограничена вашей локальной WiFi-сетью:',
        items: [
          'Аудиопотоки не проходят через интернет.',
          'Безопасность зависит от безопасности вашей локальной WiFi-сети (рекомендуется WPA2/WPA3).',
        ],
      },
      {
        heading: '8. Изменения политики',
        intro: 'Мы можем обновлять эту политику конфиденциальности. Все изменения будут опубликованы на этой странице.',
      },
      {
        heading: '9. Контакты',
        intro: 'По вопросам и предложениям обращайтесь в нашу службу поддержки.',
      },
    ],
    footer: 'Все права защищены.',
  },

  zh: {
    title: '隐私政策',
    lastUpdated: '最后更新：2026年1月10日',
    highlight: {
      title: '您的隐私是我们的首要任务',
      body: 'Talkie：WiFi对讲机主要在您的本地网络上运行。我们不会收集、发送或与外部服务器共享您的任何个人数据或音频记录。所有通信仅在同一WiFi网络中的设备之间直接进行。',
    },
    sections: [
      {
        heading: '1. 数据收集',
        intro: 'Talkie <strong>不会在远程服务器上收集任何个人数据</strong>。我们的应用：',
        items: [
          '在您的本地WiFi网络上运行',
          '不会将您的语音上传到互联网或云端',
          '不会远程存储您的音频记录',
          '无需创建账户',
        ],
      },
      {
        heading: '2. 麦克风使用',
        intro: '为了实现对讲机功能，应用需要访问您的设备麦克风。',
        items: [
          '<strong>用途：</strong> 按下"说话"按钮时捕获您的语音并验证语音活动。',
          '<strong>传输：</strong> 音频数据通过UDP协议实时传输到<strong>同一局域网WiFi</strong>中的其他设备。',
          '<strong>存储：</strong> 音频数据是临时的，不会永久存储在设备或任何服务器上。',
        ],
      },
      {
        heading: '3. 局域网访问',
        intro: '应用需要访问您的局域网（LAN）以发现和与其他设备通信。',
        items: [
          '<strong>发现：</strong> 我们使用mDNS/NSD在同一WiFi中查找其他"Talkie"用户。',
          '<strong>通信：</strong> 您设备的IP地址和可自定义的显示名称会在本地广播给其他用户以实现连接。',
        ],
      },
      {
        heading: '4. 本地数据存储',
        intro: '应用仅在您的设备上本地存储以下偏好设置：',
        items: [
          '您选择的显示名称',
          '主题偏好（深色/浅色/系统）',
          '语言偏好',
        ],
        outro: '这些数据仅保留在您的设备上，不会被共享。',
      },
      {
        heading: '5. 第三方服务',
        intro: 'Talkie致力于保护您的隐私。目前我们不使用任何第三方分析或跟踪服务。',
      },
      {
        heading: '6. 儿童隐私',
        intro: 'Talkie适合所有年龄段的用户，因为：',
        items: [
          '不会收集个人信息',
          '不会与本地WiFi网络外的陌生人联系',
          '无需年龄验证',
        ],
      },
      {
        heading: '7. 数据安全',
        intro: '由于您的通信仅限于本地WiFi网络：',
        items: [
          '音频流不会通过互联网传输。',
          '安全性取决于您的本地WiFi网络安全性（建议使用WPA2/WPA3）。',
        ],
      },
      {
        heading: '8. 政策变更',
        intro: '我们可能会更新本隐私政策。任何更改都将在此页面公布。',
      },
      {
        heading: '9. 联系方式',
        intro: '如有疑问或建议，请联系我们的支持团队。',
      },
    ],
    footer: '保留所有权利。',
  },
}
</script>
