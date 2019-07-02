export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1bd47ea21252a4a1e95045',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xj5n4n1b',
                  apiId: '539f4a4a-fa3c-4ee2-a85b-2691353f0396'
                },
                {
                  buildHookId: '5d1bd47ecc1c2c2d28456725',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-f3zqq845',
                  apiId: 'eb1d6583-ad27-46ff-8417-540b5a5dc2df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ramey1986/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-f3zqq845.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
