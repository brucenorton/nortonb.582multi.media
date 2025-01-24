import url from 'url';
import { createRunner } from '@puppeteer/replay';

export async function run(extension) {
    const runner = await createRunner(extension);

    await runner.runBeforeAllSteps();

    await runner.runStep({
        type: 'setViewport',
        width: 670,
        height: 934,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
    });
    await runner.runStep({
        type: 'navigate',
        url: 'https://nortonb.web582.com/ui-ux/',
        assertedEvents: [
            {
                type: 'navigation',
                url: 'https://nortonb.web582.com/ui-ux/',
                title: 'Applied UI/UX Design'
            }
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/sites'
            ],
            [
                'a:nth-of-type(3)'
            ],
            [
                'xpath//html/body/main/nav/a[3]'
            ],
            [
                'pierce/a:nth-of-type(3)'
            ]
        ],
        offsetY: 34,
        offsetX: 51.203125,
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/dynamic'
            ],
            [
                'a:nth-of-type(5)'
            ],
            [
                'xpath//html/body/main/nav/a[5]'
            ],
            [
                'pierce/a:nth-of-type(5)'
            ],
            [
                'text/dynamic'
            ]
        ],
        offsetY: 32,
        offsetX: 45.4453125,
        assertedEvents: [
            {
                type: 'navigation',
                url: 'https://nortonb.web582.com/',
                title: ''
            }
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/ui/ux'
            ],
            [
                'a:nth-of-type(3)'
            ],
            [
                'xpath//html/body/nav/a[3]'
            ],
            [
                'pierce/a:nth-of-type(3)'
            ],
            [
                'text/ui/ux'
            ]
        ],
        offsetY: 34,
        offsetX: 65.5859375,
        assertedEvents: [
            {
                type: 'navigation',
                url: 'https://nortonb.web582.com/ui-ux/',
                title: ''
            }
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/sites'
            ],
            [
                'a:nth-of-type(3)'
            ],
            [
                'xpath//html/body/main/nav/a[3]'
            ],
            [
                'pierce/a:nth-of-type(3)'
            ]
        ],
        offsetY: 39,
        offsetX: 40.203125,
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/ui/ux'
            ],
            [
                'a:nth-of-type(4)'
            ],
            [
                'xpath//html/body/main/nav/a[4]'
            ],
            [
                'pierce/a:nth-of-type(4)'
            ]
        ],
        offsetY: 31,
        offsetX: 16.5859375,
        assertedEvents: [
            {
                type: 'navigation',
                url: 'https://nortonb.web582.com/ui-ux/',
                title: ''
            }
        ]
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/projects[role="link"]'
            ],
            [
                'nav > a:nth-of-type(2)'
            ],
            [
                'xpath//html/body/main/nav/a[2]'
            ],
            [
                'pierce/nav > a:nth-of-type(2)'
            ]
        ],
        offsetY: 7,
        offsetX: 68.796875,
    });
    await runner.runStep({
        type: 'click',
        target: 'main',
        selectors: [
            [
                'aria/sites'
            ],
            [
                'a:nth-of-type(3)'
            ],
            [
                'xpath//html/body/main/nav/a[3]'
            ],
            [
                'pierce/a:nth-of-type(3)'
            ]
        ],
        offsetY: 42,
        offsetX: 51.203125,
    });

    await runner.runAfterAllSteps();
}

if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {
    run()
}
