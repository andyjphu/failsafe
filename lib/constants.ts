import type { IconType } from "react-icons";
import {
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineScale,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCircleStack,
  HiOutlineAdjustmentsHorizontal,
} from "react-icons/hi2";

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: HiOutlineBolt,
    title: "Validate in milliseconds",
    description:
      "Deterministic contract rules execute without LLM calls — sub-millisecond validation.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Prevent data leakage",
    description:
      "Allow/deny field lists and pattern detection block sensitive data from crossing agent boundaries.",
  },
  {
    icon: HiOutlineScale,
    title: "Compliance policies",
    description:
      "Pre-built policy packs for finance regulations and GDPR. Load with a single line.",
  },
  {
    icon: HiOutlineChatBubbleBottomCenterText,
    title: "LLM-as-judge",
    description:
      "Natural language rules evaluated by an LLM for nuanced validation beyond deterministic checks.",
  },
  {
    icon: HiOutlineCircleStack,
    title: "Full audit trail",
    description:
      "Every handoff logged to SQLite with violations, timestamps, and trace IDs.",
  },
  {
    icon: HiOutlineAdjustmentsHorizontal,
    title: "Warn or block modes",
    description:
      "Choose whether violations log warnings or actively block handoffs. Configure per-contract.",
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Define contracts",
    description:
      "Register agents and declare allow/deny rules, required fields, and natural language policies.",
  },
  {
    number: "02",
    title: "Validate handoffs",
    description:
      "Call fs.handoff() whenever agents pass data. Contracts are checked in microseconds.",
  },
  {
    number: "03",
    title: "Monitor & audit",
    description:
      "Every validation is logged. Inspect violations, trace issues, and export compliance reports.",
  },
];

export const GITHUB_URL = "https://github.com/Haneesh25/FailSafe/tree/main/failsafe-pip-package";

export const NAV_LINKS = [
  { label: "GitHub", href: GITHUB_URL },
];

export const INSTALL_COMMAND = "pip install failsafe-ai";

export interface CodeDemoStep {
  number: string;
  title: string;
  description: string;
  code: string;
  addedLines: number[];
  removedLines: number[];
}

export const CODE_DEMO_STEPS: CodeDemoStep[] = [
  {
    number: "00",
    title: "Your existing code",
    description: "A standard LangGraph pipeline — research passes data directly to writer.",
    code: `from langgraph.graph import StateGraph, START, END

graph = StateGraph(dict)
graph.add_node("research", lambda s: {
    "sources": ["arxiv.org"],
    "api_key": "sk-secret-0x90F"  # leaked to next node
})
graph.add_node("writer", lambda s: print("writer sees:", s) or {})
graph.add_edge(START, "research")
graph.add_edge("research", "writer")
graph.add_edge("writer", END)
graph.compile().invoke({"query": "AI safety"})`,
    addedLines: [],
    removedLines: [],
  },
  {
    number: "01",
    title: "Import FailSafe",
    description: "One new import alongside your existing LangGraph imports.",
    code: `from langgraph.graph import StateGraph, START, END
from failsafe import FailSafe

graph = StateGraph(dict)
graph.add_node("research", lambda s: {
    "sources": ["arxiv.org"],
    "api_key": "sk-secret-0x90F"  # leaked to next node
})
graph.add_node("writer", lambda s: print("writer sees:", s) or {})
graph.add_edge(START, "research")
graph.add_edge("research", "writer")
graph.add_edge("writer", END)
graph.compile().invoke({"query": "AI safety"})`,
    addedLines: [1],
    removedLines: [],
  },
  {
    number: "02",
    title: "Define a contract",
    description: "Register agents and declare what data is allowed or denied.",
    code: `from langgraph.graph import StateGraph, START, END
from failsafe import FailSafe

fs = FailSafe(mode="block", audit_db=":memory:")
fs.register_agent("research")
fs.register_agent("writer")
fs.contract(name="r2w", source="research", target="writer",
            allow=["query", "sources"], deny=["api_key"])

graph = StateGraph(dict)
graph.add_node("research", lambda s: {
    "sources": ["arxiv.org"],
    "api_key": "sk-secret-0x90F"  # leaked to next node
})
graph.add_node("writer", lambda s: print("writer sees:", s) or {})
graph.add_edge(START, "research")
graph.add_edge("research", "writer")
graph.add_edge("writer", END)
graph.compile().invoke({"query": "AI safety"})`,
    addedLines: [3, 4, 5, 6, 7],
    removedLines: [],
  },
  {
    number: "03",
    title: "Write a guard",
    description: "A 4-line function that validates handoffs and sanitizes the payload.",
    code: `from langgraph.graph import StateGraph, START, END
from failsafe import FailSafe

fs = FailSafe(mode="block", audit_db=":memory:")
fs.register_agent("research")
fs.register_agent("writer")
fs.contract(name="r2w", source="research", target="writer",
            allow=["query", "sources"], deny=["api_key"])

def guard(s):
    r = fs.handoff_sync("research", "writer", s)
    for v in r.violations: print(f"BLOCKED: {v.message}")
    return r.sanitized_payload

graph = StateGraph(dict)
graph.add_node("research", lambda s: {
    "sources": ["arxiv.org"],
    "api_key": "sk-secret-0x90F"  # leaked to next node
})
graph.add_node("writer", lambda s: print("writer sees:", s) or {})
graph.add_edge(START, "research")
graph.add_edge("research", "writer")
graph.add_edge("writer", END)
graph.compile().invoke({"query": "AI safety"})`,
    addedLines: [9, 10, 11, 12],
    removedLines: [],
  },
  {
    number: "04",
    title: "Wire it in",
    description: "Add the guard node and reroute edges: research → guard → writer.",
    code: `from langgraph.graph import StateGraph, START, END
from failsafe import FailSafe

fs = FailSafe(mode="block", audit_db=":memory:")
fs.register_agent("research")
fs.register_agent("writer")
fs.contract(name="r2w", source="research", target="writer",
            allow=["query", "sources"], deny=["api_key"])

def guard(s):
    r = fs.handoff_sync("research", "writer", s)
    for v in r.violations: print(f"BLOCKED: {v.message}")
    return r.sanitized_payload

graph = StateGraph(dict)
graph.add_node("research", lambda s: {
    "sources": ["arxiv.org"],
    "api_key": "sk-secret-0x90F"
})
graph.add_node("guard", guard)
graph.add_node("writer", lambda s: print("writer sees:", s) or {})
graph.add_edge(START, "research")
graph.add_edge("research", "guard")
graph.add_edge("guard", "writer")
graph.add_edge("writer", END)
graph.compile().invoke({"query": "AI safety"})`,
    addedLines: [19, 22, 23],
    removedLines: [],
  },
];
