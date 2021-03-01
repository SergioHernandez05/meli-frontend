export interface Filter {
    id:     string;
    name:   string;
    type:   string;
    values: FilterValue[];
}

export interface FilterValue {
    id:              string;
    name:            string;
    path_from_root?: Sort[];
}

export interface Sort {
    id:   null | string;
    name: string;
}