/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridProperties } from '../patterns/grid';
import type { HTMLPandaProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/helpers';

export interface GridProps extends GridProperties, DistributiveOmit<HTMLPandaProps<'div'>, keyof GridProperties > {}


export declare const Grid: FunctionComponent<GridProps>