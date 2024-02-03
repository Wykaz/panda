import type { Context } from '@pandacss/core'
import { outdent } from 'outdent'

export function generateSolidJsxStringLiteralTypes(ctx: Context) {
  const { factoryName, componentName, upperName, typeName } = ctx.jsx

  return {
    jsxFactory: outdent`
${ctx.file.importType(upperName, '../types/jsx')}
export declare const x${factoryName}: X${upperName}
    `,
    jsxType: outdent`
import type { Component, ComponentProps, JSX } from 'solid-js'

interface Dict {
  [k: string]: unknown
}

export type ElementType<P = any> = keyof JSX.IntrinsicElements | Component<P>

export type X${componentName}<T extends ElementType> = {
    (args: { raw: readonly string[] | ArrayLike<string> }): (props: ComponentProps<T>) => JSX.Element
    displayName?: string
}

export interface JsxFactory {
    <T extends ElementType>(component: T): X${componentName}<T>
}

export type JsxElements = {
  [K in keyof JSX.IntrinsicElements]: X${componentName}<K>
}

export type X${upperName} = JsxFactory & JsxElements

export type X${typeName}<T extends ElementType> = ComponentProps<T>
  `,
  }
}
