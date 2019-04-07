<template>
    <div>
        <v-label :theme="theme()">Default icons</v-label>
        <p>
            <!-- you can pass in a smaller `width` and `height` as props -->
            <v-icon-base
                :size="ICON_SIZE.SMALL"
                icon-name="write"
            >
                <v-icon-write />
            </v-icon-base>

            <!-- or you can use the default, which is 18 -->
            <v-icon-base icon-name="write"> <v-icon-write /> </v-icon-base>

            <!-- or make it a little bigger too :) -->
            <v-icon-base
                :size="ICON_SIZE.BIG"
                icon-name="write"
            >
                <v-icon-write />
            </v-icon-base>
        </p>

        <v-label :theme="theme()">Primary color icons</v-label>
        <p>
            <!-- you can pass in a smaller `width` and `height` as props -->
            <v-icon-base
                :size="ICON_SIZE.SMALL"
                icon-name="garbage"
                :iconColor="primaryColor"
            >
                <v-icon-garbage />
            </v-icon-base>

            <!-- or you can use the default, which is 18 -->
            <v-icon-base icon-name="garbage" :iconColor="primaryColor">
                <v-icon-garbage />
            </v-icon-base>

            <!-- or make it a little bigger too :) -->
            <v-icon-base
                :size="ICON_SIZE.BIG"
                icon-name="garbage"
                :iconColor="primaryColor"
            >
                <v-icon-garbage />
            </v-icon-base>
        </p>

        <v-label :theme="theme()">Secondary color icons</v-label>
        <p>
            <!-- you can pass in a smaller `width` and `height` as props -->
            <v-icon-base
                :size="ICON_SIZE.SMALL"
                icon-name="write"
                :iconColor="secondaryColor"
            >
                <v-icon-write />
            </v-icon-base>

            <!-- or you can use the default, which is 18 -->
            <v-icon-base icon-name="write" :iconColor="secondaryColor">
                <v-icon-write />
            </v-icon-base>

            <!-- or make it a little bigger too :) -->
            <v-icon-base
                :size="ICON_SIZE.BIG"
                icon-name="write"
                :iconColor="secondaryColor"
            >
                <v-icon-write />
            </v-icon-base>
        </p>

        <v-label :theme="theme()">Tertiary color icons</v-label>
        <p>
            <!-- you can pass in a smaller `width` and `height` as props -->
            <v-icon-base
                :size="ICON_SIZE.SMALL"
                icon-name="garbage"
                :iconColor="tertiaryColor"
            >
                <v-icon-garbage />
            </v-icon-base>

            <!-- or you can use the default, which is 18 -->
            <v-icon-base icon-name="garbage" :iconColor="tertiaryColor">
                <v-icon-garbage />
            </v-icon-base>

            <!-- or make it a little bigger too :) -->
            <v-icon-base
                :size="ICON_SIZE.BIG"
                icon-name="garbage"
                :iconColor="tertiaryColor"
            >
                <v-icon-garbage />
            </v-icon-base>
        </p>

        <v-label :theme="theme()">Custom color: red</v-label>
        <p>
            <!-- you can pass in a smaller `width` and `height` as props -->
            <v-icon-base
                :size="ICON_SIZE.SMALL"
                icon-name="write"
                :iconColor="'red'"
            >
                <v-icon-write />
            </v-icon-base>

            <!-- or you can use the default, which is 18 -->
            <v-icon-base icon-name="write" :iconColor="'red'">
                <v-icon-write />
            </v-icon-base>

            <!-- or make it a little bigger too :) -->
            <v-icon-base
                :size="ICON_SIZE.BIG"
                icon-name="write"
                :iconColor="'red'"
            >
                <v-icon-write />
            </v-icon-base>
        </p>

        <v-label :theme="theme()">
            Custom size, with or height: size 50, height 20 width 40, height 40 width 20
        </v-label>
        <p>
            <!-- you can pass in a smaller `width` and `height` as props -->
            <v-icon-base
                :size="50"
                icon-name="garbage"
            >
                <v-icon-garbage />
            </v-icon-base>

            <!-- or you can use the default, which is 18 -->
            <v-icon-base 
                icon-name="garbage"
                :width="40"
                :height="20"
            >
                <v-icon-garbage />
            </v-icon-base>

            <!-- or make it a little bigger too :) -->
            <v-icon-base
                :width="20"
                :height="40"
                icon-name="garbage"
            >
                <v-icon-garbage />
            </v-icon-base>
        </p>
    </div>
</template>

<script>
import IconBase, { ICON_SIZE } from '../components/atoms/iconBase/IconBase';
import IconWrite from '../components/atoms/svgIcons/IconWrite';
import IconGarbage from '../components/atoms/svgIcons/IconGarbage';
import Label from '../components/atoms/label/Label';
import { theme } from '../themes/testTheme';

export default {
    components: {
        'v-icon-base': IconBase,
        'v-icon-write': IconWrite,
        'v-icon-garbage': IconGarbage,
        'v-label': Label,
    },
    data: function() {
        return {
            theme,
            ICON_SIZE,
        };
    },
    computed: {
        primaryColor() {
            return theme().palette.primary;
        },
        secondaryColor() {
            return theme().palette.secondary;
        },
        tertiaryColor() {
            return theme().palette.tertiary;
        },
    },
};
</script>

<style scoped>
p {
    padding: 10px;
}
</style>
