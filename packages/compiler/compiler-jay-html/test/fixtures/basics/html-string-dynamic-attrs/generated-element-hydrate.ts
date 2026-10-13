import {
    JayElement,
    dynamicHtml as dh,
    dynamicAttribute as da,
    RenderElement,
    ReferencesManager,
    ConstructContext,
    RenderElementOptions,
    JayContract,
    adoptElement,
} from '@jay-framework/runtime';

export interface HtmlStringDynamicAttrsViewState {
    hook: string;
    richContent: string;
}

export interface HtmlStringDynamicAttrsElementRefs {}

export type HtmlStringDynamicAttrsSlowViewState = {};
export type HtmlStringDynamicAttrsFastViewState = HtmlStringDynamicAttrsViewState;
export type HtmlStringDynamicAttrsInteractiveViewState = HtmlStringDynamicAttrsViewState;

export type HtmlStringDynamicAttrsElement = JayElement<
    HtmlStringDynamicAttrsViewState,
    HtmlStringDynamicAttrsElementRefs
>;
export type HtmlStringDynamicAttrsElementRender = RenderElement<
    HtmlStringDynamicAttrsViewState,
    HtmlStringDynamicAttrsElementRefs,
    HtmlStringDynamicAttrsElement
>;
export type HtmlStringDynamicAttrsElementPreRender = [
    HtmlStringDynamicAttrsElementRefs,
    HtmlStringDynamicAttrsElementRender,
];
export type HtmlStringDynamicAttrsContract = JayContract<
    HtmlStringDynamicAttrsViewState,
    HtmlStringDynamicAttrsElementRefs,
    HtmlStringDynamicAttrsSlowViewState,
    HtmlStringDynamicAttrsFastViewState,
    HtmlStringDynamicAttrsInteractiveViewState
>;

export function hydrate(
    rootElement: Element,
    options?: RenderElementOptions,
): HtmlStringDynamicAttrsElementPreRender {
    const [refManager, []] = ReferencesManager.for(options, [], [], [], []);
    const render = (viewState: HtmlStringDynamicAttrsViewState) =>
        ConstructContext.withHydrationRootContext(viewState, refManager, rootElement, () =>
            adoptElement('S0/0', {}, [
                adoptElement('S0/0/0', { 'data-hook': da((vs) => vs.hook) }, [
                    dh((vs) => vs.richContent),
                ]),
            ]),
        ) as HtmlStringDynamicAttrsElement;
    return [refManager.getPublicAPI() as HtmlStringDynamicAttrsElementRefs, render];
}
