module.exports = {
  title: 'Title',
  description: 'Sample',
  dest: 'html',

  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '/img/logo.png',

    repo: 'http://sample-gitlab.example.com/project',
    repoLabel: 'Contribute',
    editLinks: true,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Groups',
        items: [
          { text: 'Group1', link: '/group1/' },
          { text: 'Group2', link: '/group2/' }
        ]
      }
    ],

    sidebar: {
      '/group1/': [
        '',
        'contents1',
        'contents2'
      ],

      '/group2/': [
        '',
        'contents3',
        'contents4'
      ],

      // fallback
      '/': [
        ''
      ]
    }

  }
}