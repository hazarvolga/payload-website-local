# Tasks: Set up and run Payload CMS website locally

**Input**: Design documents from `/Users/hazarekiz/Projects/payloadcms_offical/specs/001-https-github-com/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Web app**: `backend/src/`, `frontend/src/`
- Paths shown below assume web app structure - adjust based on plan.md

## Phase 3.1: Setup
- [ ] T001 Create scripts/ directory and setup.js file
- [ ] T002 Initialize setup script with Node.js shebang and basic structure
- [ ] T003 [P] Configure ESLint for scripts/

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [ ] T004 [P] Contract test for clone operation in tests/contract/test_clone.js
- [ ] T005 [P] Contract test for install operation in tests/contract/test_install.js
- [ ] T006 [P] Contract test for dev server in tests/contract/test_dev.js
- [ ] T007 [P] Integration test for full setup flow in tests/integration/test_setup_flow.js

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [ ] T008 [P] Repository model in backend/src/models/repository.js
- [ ] T009 [P] Dependencies model in backend/src/models/dependencies.js
- [ ] T010 [P] DevelopmentServer model in backend/src/models/developmentServer.js
- [ ] T011 Clone function in scripts/setup.js
- [ ] T012 Install function in scripts/setup.js
- [ ] T013 Dev server function in scripts/setup.js
- [ ] T014 Main setup orchestration in scripts/setup.js

## Phase 3.4: Integration
- [ ] T015 Git integration for cloning
- [ ] T016 npm integration for installing
- [ ] T017 Process management for dev server
- [ ] T018 Error handling and logging

## Phase 3.5: Polish
- [ ] T019 [P] Unit tests for models in tests/unit/test_models.js
- [ ] T020 Performance test for setup time
- [ ] T021 [P] Update quickstart.md with script usage
- [ ] T022 Documentation for setup script

## Dependencies
- Tests (T004-T007) before implementation (T008-T014)
- Models (T008-T010) before functions (T011-T014)
- Setup (T001-T003) before everything
- Implementation before integration (T015-T018)
- Everything before polish (T019-T022)

## Parallel Example
```
# Launch T004-T007 together:
Task: "Contract test for clone operation in tests/contract/test_clone.js"
Task: "Contract test for install operation in tests/contract/test_install.js"
Task: "Contract test for dev server in tests/contract/test_dev.js"
Task: "Integration test for full setup flow in tests/integration/test_setup_flow.js"
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each task
- Avoid: vague tasks, same file conflicts

## Task Generation Rules
*Applied during main() execution*

1. **From Contracts**:
   - Each contract file → contract test task [P]
   - Each endpoint → implementation task
   
2. **From Data Model**:
   - Each entity → model creation task [P]
   - Relationships → service layer tasks
   
3. **From User Stories**:
   - Each story → integration test [P]
   - Quickstart scenarios → validation tasks

4. **Ordering**:
   - Setup → Tests → Models → Services → Endpoints → Polish
   - Dependencies block parallel execution

## Validation Checklist
*GATE: Checked by main() before returning*

- [ ] All contracts have corresponding tests
- [ ] All entities have model tasks
- [ ] All tests come before implementation
- [ ] Parallel tasks truly independent
- [ ] Each task specifies exact file path
- [ ] No task modifies same file as another [P] task</content>
<parameter name="filePath">/Users/hazarekiz/Projects/payloadcms_offical/specs/001-https-github-com/tasks.md
