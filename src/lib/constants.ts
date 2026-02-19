import type { IconType } from 'react-icons'
import {
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineScale,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCircleStack,
  HiOutlineAdjustmentsHorizontal,
} from 'react-icons/hi2'

export interface Feature {
  icon: IconType
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    icon: HiOutlineBolt,
    title: 'Validate in milliseconds',
    description:
      'Deterministic contract rules execute without LLM calls — sub-millisecond validation.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Prevent data leakage',
    description:
      'Allow/deny field lists and pattern detection block sensitive data from crossing agent boundaries.',
  },
  {
    icon: HiOutlineScale,
    title: 'Compliance policies',
    description:
      'Pre-built policy packs for finance regulations and GDPR. Load with a single line.',
  },
  {
    icon: HiOutlineChatBubbleBottomCenterText,
    title: 'LLM-as-judge',
    description:
      'Natural language rules evaluated by an LLM for nuanced validation beyond deterministic checks.',
  },
  {
    icon: HiOutlineCircleStack,
    title: 'Full audit trail',
    description:
      'Every handoff logged to SQLite with violations, timestamps, and trace IDs.',
  },
  {
    icon: HiOutlineAdjustmentsHorizontal,
    title: 'Warn or block modes',
    description:
      'Choose whether violations log warnings or actively block handoffs. Configure per-contract.',
  },
]

export interface Step {
  number: string
  title: string
  description: string
}

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Define contracts',
    description:
      'Register agents and declare allow/deny rules, required fields, and natural language policies.',
  },
  {
    number: '02',
    title: 'Validate handoffs',
    description:
      'Call fs.handoff() whenever agents pass data. Contracts are checked in microseconds.',
  },
  {
    number: '03',
    title: 'Monitor & audit',
    description:
      'Every validation is logged. Inspect violations, trace issues, and export compliance reports.',
  },
]

export const NAV_LINKS = [
  { label: 'Docs', href: '#install' },
  { label: 'GitHub', href: '#' },
]

export const INSTALL_COMMAND = 'pip install failsafe-ai'

export const USAGE_CODE = `from failsafe import FailSafe

fs = FailSafe(mode="block")

fs.register_agent("research_agent")
fs.register_agent("writer_agent")

fs.contract(
    name="research-to-writer",
    source="research_agent",
    target="writer_agent",
    allow=["query", "sources", "summary"],
    deny=["api_key", "internal_config"],
    require=["query", "sources"],
)

result = await fs.handoff(
    source="research_agent",
    target="writer_agent",
    payload={
        "query": "AI safety",
        "sources": ["arxiv.org/1234"],
        "api_key": "sk-secret-123",  # blocked
    },
)
# result.passed == False
# "Denied fields found in payload: ['api_key']"`
