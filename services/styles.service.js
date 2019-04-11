import { setProperty } from "../middleware/styles";
import { CURVE } from "../constants/theme";

export const KIND = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
    TERTIARY: 'TERTIARY',
    DETRIMENTAL: 'DETRIMENTAL',
    POSITIVE: 'POSITIVE',
};

class StyleService{
    _curvature = null;

    initTheme = (theme, curvature) => {
        theme.map((property) => {
            setProperty(property.key, property.value);
        });
    
        styleService.curvature = curvature;
    };

    set curvature(curvature) {
        this._curvature = curvature;
    }

    get curvature() {
        return this._curvature;
    }

    getKindClass(kind) {
        return {
            'primary': kind === KIND.PRIMARY,
            'secondary': kind === KIND.SECONDARY,
            'tertiary': kind === KIND.TERTIARY,
            'detrimental': kind === KIND.DETRIMENTAL,
            'positive': kind === KIND.POSITIVE,
        }
    }

    get curvatureClass() {
        return {
            'no-curve': this.curvature === CURVE.OFF,
            'weak-curve': this.curvature === CURVE.WEAK,
            'strong-curve': this.curvature === CURVE.STRONG,
        }
    }
}

export const styleService = new StyleService();