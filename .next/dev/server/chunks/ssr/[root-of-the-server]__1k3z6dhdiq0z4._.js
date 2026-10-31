module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((project)=>({
            slug: project.slug
        }));
}
async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProject"])(slug);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "wrap project-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/projects",
                className: "back-link",
                children: "← Back to all projects"
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `project-hero ${project.accent}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "project-kicker",
                        children: [
                            project.number,
                            " / ",
                            project.category
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: project.shortDescription
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "corner-shape"
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-details",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "THE CONTEXT & PROBLEM"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: project.overview
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "MY ROLE & CONTRIBUTION"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: project.role
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "TOOLS, ARCHITECTURE & METHODS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tag-list",
                                children: project.tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: tool
                                    }, tool, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    project.metrics && project.metrics.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "EVALUATION & BENCHMARKS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "metric-row",
                                children: project.metrics.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: metric.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: metric.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, metric.label, true, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    project.keyHighlights && project.keyHighlights.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "highlights-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "TECHNICAL HIGHLIGHTS & ARCHITECTURE"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "highlights-list",
                                children: project.keyHighlights.map((highlight, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: highlight
                                    }, idx, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-actions",
                children: [
                    project.repositoryUrl && project.repositoryUrl !== "#" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "button",
                        href: project.repositoryUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "View repository ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    project.huggingFaceUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "button-outline",
                        href: project.huggingFaceUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Hugging Face model weights ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    project.demoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "arrow-link",
                        href: project.demoUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                            "Launch live demo ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 106,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/projects/[slug]/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProject",
    ()=>getProject,
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "nimde-research-assistant",
        number: "01",
        category: "RAG & LLM Engineering",
        categoryType: "ai-engineering",
        title: "Nimde — Local Research Assistant",
        shortDescription: "A local-first assistant for researchers to query academic papers with verifiable, source-grounded citations.",
        overview: "Academic literature reviews often suffer from hallucinated citations and manual cross-referencing friction. Nimde is an offline-capable, local-first research companion designed to parse PDFs, build literature matrices, and provide evidence-grounded answers. Built with ChromaDB and local Ollama models, it preserves researcher privacy while delivering precise document synthesis.",
        tools: [
            "Python",
            "Ollama",
            "ChromaDB",
            "Vector Embeddings",
            "RAG Evaluation",
            "FastAPI"
        ],
        role: "Team Lead and AI Engineering Lead: designed query processing pipelines, prompt structures, vector index tuning, and empirical evaluation harnesses.",
        accent: "lilac",
        status: "Featured",
        repositoryUrl: "https://github.com/tag-ecosystemai/c1-navigators-project-2.git",
        metrics: [
            {
                label: "Recall@3",
                value: "87.6%"
            },
            {
                label: "Mean Reciprocal Rank (MRR)",
                value: "0.847"
            },
            {
                label: "Architecture",
                value: "Local-first"
            }
        ],
        keyHighlights: [
            "Rigorous retrieval evaluation testing multiple embedding models against benchmark paper queries.",
            "Chunking optimization preserving tables, academic formulas, and section context.",
            "Direct attribution linking generated claims back to exact source page numbers."
        ]
    },
    {
        slug: "nigerian-language-identification",
        number: "02",
        category: "Speech & Audio NLP",
        categoryType: "ml-nlp",
        title: "Nigerian Language Audio Identification (Wav2Vec2 XLS-R)",
        shortDescription: "Fine-tuned acoustic model identifying low-resource Nigerian languages from spoken audio.",
        overview: "Speech systems frequently underperform on African and indigenous languages due to acoustic variation and low-resource data availability. Built for the Data Science Nigeria initiative, this project fine-tuned Meta's Wav2Vec2 XLS-R architecture on spoken audio samples across Nigerian language dialects, optimizing feature extraction layers to achieve robust dialectal classification.",
        tools: [
            "PyTorch",
            "Hugging Face Transformers",
            "Wav2Vec2 XLS-R",
            "Audio Processing",
            "Librosa"
        ],
        role: "End-to-end model development: audio preprocessing, feature extraction, fine-tuning classification heads, and deployment to the Hugging Face Model Hub.",
        accent: "peach",
        status: "Featured",
        huggingFaceUrl: "https://huggingface.co/Prestigeeo/dsn-2026-lid-xlsr",
        repositoryUrl: "https://huggingface.co/Prestigeeo/dsn-2026-lid-xlsr",
        metrics: [
            {
                label: "Base Model",
                value: "XLS-R (300M)"
            },
            {
                label: "Focus",
                value: "Low-Resource Audio"
            },
            {
                label: "Deployment",
                value: "Hugging Face"
            }
        ],
        keyHighlights: [
            "Acoustic spectrogram and waveform normalization to handle varying recording qualities and microphone noise.",
            "Transfer learning leveraging cross-lingual acoustic representations to combat small dataset constraints.",
            "Publicly hosted weights and inference pipeline on Hugging Face for community reuse."
        ]
    },
    {
        slug: "resolve",
        number: "03",
        category: "AI Agents & Regulatory Systems",
        categoryType: "ai-engineering",
        title: "Resolve — AI Consumer Redress Assistant",
        shortDescription: "A hybrid AI decision-support system turning chaotic Nigerian financial & service disputes into verified regulatory complaints.",
        overview: "In Nigeria and across Africa, millions of consumers lose money daily to failed bank transfers (debit without credit), undelivered telecom services, and vendor fraud—trapped in institutional finger-pointing. Resolve is NOT a shallow letter generator. It is a hybrid decision-support system combining an investigative evidence gatekeeper, a deterministic statutory rules engine (enforcing CBN, NCC, and FCCPA 2018 timelines), and a zero-hallucination verification pass ensuring 100% factual accuracy in drafted petitions.",
        tools: [
            "Python",
            "FastAPI",
            "Next.js",
            "Gemini API",
            "Pytest",
            "Deterministic Rules Engine",
            "Pydantic"
        ],
        role: "Full-Stack AI Engineer: architected the deterministic regulatory state machine, FastAPI backend, verification schemas, Next.js interface, and evaluation benchmark.",
        accent: "rose",
        status: "Featured",
        repositoryUrl: "https://github.com/Prestigeeo/Resolve",
        demoUrl: "https://resolve-murex.vercel.app",
        metrics: [
            {
                label: "Benchmark Accuracy",
                value: "100.0%"
            },
            {
                label: "Factual Hallucinations",
                value: "0 Incidents"
            },
            {
                label: "Test Suite Pass Rate",
                value: "17/17 (100%)"
            }
        ],
        keyHighlights: [
            "Investigative Evidence Gatekeeper: Halts premature drafting until critical facts (30-digit NIBSS Session IDs, payment rails, agreed delivery dates) are verified.",
            "Deterministic Rules Engine: Guarantees statutory SLAs (CBN 14-day rule, NCC 622, Card Chargebacks, FCCPA 2018) are calculated deterministically rather than guessed by an LLM.",
            "Zero-Hallucination Post-Verification Pass: Verifies 100% of dates, amounts, and references against extracted user evidence.",
            "Production-ready deployment: FastAPI backend containerized with pytest automation, paired with a mobile-first Next.js web application."
        ]
    },
    {
        slug: "credit-risk-agent",
        number: "04",
        category: "AI Agents & Fintech",
        categoryType: "ai-engineering",
        title: "Banking Credit-Risk Investigation Agent",
        shortDescription: "An evidence-grounded agentic workflow assisting credit officers in investigating risk signals.",
        overview: "Commercial lending decisions demand meticulous cross-examination of applicant statements, bank transactions, credit bureau files, and internal underwriting policies. This project implemented an evidence-guided agent pipeline that parses heterogeneous financial documents, flags discrepancies, and drafts auditable risk memorandums with verifiable evidence trails.",
        tools: [
            "Python",
            "Agent Workflows",
            "Requirements Architecture",
            "Financial Data Modeling"
        ],
        role: "Frontend architecture, product requirements documentation (PRD), credit risk evidence schema definition, and overall system integration.",
        accent: "sage",
        status: "Featured",
        repositoryUrl: "https://github.com/tag-ecosystemai/c1-navigators-project-3.git",
        metrics: [
            {
                label: "Workflow",
                value: "Evidence-driven"
            },
            {
                label: "Auditing",
                value: "100% Citation Grounded"
            }
        ],
        keyHighlights: [
            "Mapped credit policy rules into verifiable inspection checklists for the agent pipeline.",
            "Designed an audit-trail interface that highlights inconsistencies between claimed revenue and bank statements.",
            "Constructed strict prompting bounds to prevent hallucinations in financial decisions."
        ]
    },
    {
        slug: "fraud-detection-random-forest",
        number: "05",
        category: "Machine Learning & Risk",
        categoryType: "ml-nlp",
        title: "Financial Transaction Fraud Detection",
        shortDescription: "Supervised classification handling extreme class imbalance in fraudulent banking transactions.",
        overview: "Fraud detection in digital banking is characterized by heavy class imbalance—fraud accounts for a tiny fraction of total transactions. This project explored feature engineering, anomaly indicators, and ensemble classification (Random Forest) tuned with precision-recall constraints to minimize false negatives without overwhelming manual review teams.",
        tools: [
            "Python",
            "Scikit-Learn",
            "Random Forest",
            "Imbalanced-Learn (SMOTE)",
            "Pandas",
            "Matplotlib"
        ],
        role: "Individual project: exploratory data analysis, class balance experiments, threshold tuning, and model evaluation.",
        accent: "sage",
        status: "Completed",
        repositoryUrl: "https://github.com/Prestigeeo/Fraud-Detection-Random-Forest",
        metrics: [
            {
                label: "Algorithm",
                value: "Random Forest"
            },
            {
                label: "Metric Focus",
                value: "PR-AUC / Recall"
            }
        ],
        keyHighlights: [
            "Evaluated cost-sensitive learning against resampling techniques (SMOTE vs undersampling).",
            "Feature importance analysis identifying transaction amount deltas and velocity anomalies as key signals."
        ]
    },
    {
        slug: "customer-intelligence-classifier",
        number: "06",
        category: "NLP & Machine Learning",
        categoryType: "ml-nlp",
        title: "Customer Intelligence Classifier",
        shortDescription: "Real-time support ticket classification pairing intent routing with sentiment triage.",
        overview: "Customer support teams often struggle with ticket backlogs where urgent, frustrated clients wait behind routine informational queries. This solution applies NLP classification and sentiment analysis to incoming messages, predicting intent categories and sentiment urgency to prioritize urgent operational escalations.",
        tools: [
            "Python",
            "Scikit-Learn",
            "NLP",
            "Streamlit",
            "Sentiment Analysis"
        ],
        role: "Built the interactive Streamlit user interface, integrated the inference pipeline, and deployed the production app.",
        accent: "rose",
        status: "Completed",
        repositoryUrl: "https://github.com/tag-ecosystemai/c1-navigators-project-1.git",
        metrics: [
            {
                label: "Interface",
                value: "Streamlit Live"
            },
            {
                label: "Function",
                value: "Intent + Sentiment"
            }
        ],
        keyHighlights: [
            "Combined TF-IDF text features with calibrated classification models for rapid inference.",
            "Delivered an intuitive triage dashboard enabling non-technical support agents to test incoming queries live."
        ]
    },
    {
        slug: "unfpa-field-population-analysis",
        number: "07",
        category: "Demography & Public Health",
        categoryType: "stats-bi",
        title: "Demographic Field Survey & Health Dynamics",
        shortDescription: "Field data collection, cleaning, and statistical analysis for population healthcare planning.",
        overview: "As part of community health initiatives with the United Nations Population Fund (UNFPA), this project bridged field-level survey collection with quantitative demographic analysis. Handled household survey administration, data validation, and trend analysis on reproductive health access and youth community indicators.",
        tools: [
            "Demographic Analysis",
            "Survey Sampling",
            "Excel",
            "SPSS / R",
            "Data Validation"
        ],
        role: "Field Enumerator & Analyst: survey administration, data cleaning across 300+ records, and indicator reporting.",
        accent: "peach",
        status: "Completed",
        metrics: [
            {
                label: "Records Handled",
                value: "300+ Households"
            },
            {
                label: "Domain",
                value: "Demography & Health"
            }
        ],
        keyHighlights: [
            "Applied statistical sampling techniques to ensure representative cross-sections in community surveys.",
            "Identified systemic gaps in reproductive healthcare accessibility to inform program allocations."
        ]
    }
];
function getProject(slug) {
    return projects.find((project)=>project.slug === slug);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1k3z6dhdiq0z4._.js.map