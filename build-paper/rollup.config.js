
import pkg from './package.json';  
import typescript from 'rollup-plugin-typescript2'; 
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss';

export default {
    input: './src/index.ts',//入口文件
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: false
        },
        {
            file: pkg.module,
            format: 'esm',
            sourcemap: false
        },
        {
            file: pkg.umd,
            format: 'umd',
            name: 'ParrotPaper', // umd模块名称，相当于一个命名空间，会自动挂载到window下面
            sourcemap: false,
            plugins: [terser()],
            globals:{
                'react':'react',
                '@parrotjs/classnames':'ParrotClassnames'       
            },
        }
    ],  
    external:['react','@parrotjs/classnames'],
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    module: 'ESNext',
                },
            },
            useTsconfigDeclarationDir: true, // 使用tsconfig中的声明文件目录配置
        }),
        scss({ 
            output: 'dist/index.css',
            sass: require('sass')
        }),
        resolve()
    ]
}