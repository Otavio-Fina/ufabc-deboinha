src - diretório principal
    /app - páginas e roteamento principal {
        /auth - autenticação
        /subject - páginas de cada matéria (autogeradas)
            /[id]
                page.tsx
        favicon.ico
        global.css
        layout.tsx
        page.tsx (página inicial)
    }
    /components - componentes reutilizáveis {
        /category-filters - filtros por categoria {
            index.tsx
            types.ts
        }
        /header - cabeçalho {
            index.tsx
            styles.module.css
        }
        /roadmap {
            roadmap-view.tsx - visualização completa do roadmap
            topic-node.tsx - componente de cada tópico
            types.ts
        }
        /subject-grid - grade de matérias {
            index.tsx
            subject-card.tsx - card individual por matéria
            types.ts
        }
        /ui - componentes genéricos da ui {
            button.tsx
            card.tsx
        }
    }
    /lib - lógica de dados {
        /api {
            subjects.ts - função que busca matérias
            types.ts
        }
        /constants - dados estatísticos {
            courses.ts - lista de cursos
            subjects.ts - dados mockados
        }
    }
    /public - arquivos estáticos
        /images - imagens que serão utilizadas
    /styles
        theme.ts - configs do tailwind
    /types - tipos globais
        subject.d.ts - para matérias