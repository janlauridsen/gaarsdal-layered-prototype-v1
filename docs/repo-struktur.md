gaarsdal-layered-prototype-v1/
├── ARCHITECTURE.md
├── DECISIONS.md
├── README.md
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
│       └── decision/
│           └── route.ts
├── layers/
│   ├── ui/
│   │   └── ui-contract.ts
│   ├── orchestration/
│   │   ├── state-machine.ts
│   │   └── states.ts
│   ├── domain/
│   │   ├── domain-types.ts
│   │   ├── ethical-guards.ts
│   │   └── strategies.ts
│   ├── ai/
│   │   ├── ai-contract.ts
│   │   └── signals.ts
│   └── infrastructure/
│       └── runtime.ts
├── oal/
│   └── responsibility-info.ts
├── observability/
│   └── audit-log.ts
├── types/
│   └── shared.ts
├── package.json
├── tsconfig.json
└── next.config.js
