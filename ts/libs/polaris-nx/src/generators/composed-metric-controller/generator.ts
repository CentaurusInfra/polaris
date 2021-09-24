import * as path from 'path';
import {
    Generator,
    Tree,
    formatFiles,
    generateFiles,
    offsetFromRoot,
    readProjectConfiguration,
    updateProjectConfiguration,
} from '@nrwl/devkit';
import { applicationGenerator } from '@nrwl/node';
import {
    NPM_PACKAGES,
    POLARIS_INIT_LIB_FN_NAME,
    VERSIONS,
    addDeployTarget,
    addDockerBuildConfig,
    addPolarisDependenciesToPackageJson,
    changeBuildDependencyBundling,
    getComposedMetricTypeNames,
    normalizeProjectGeneratorOptions,
    runCallbacksSequentially,
} from '../../util';
import { addCommonWorkspaceRootFiles, generateTypeScriptDockerfile } from '../common';
import { ComposedMetricControllerGeneratorNormalizedSchema, ComposedMetricControllerGeneratorSchema } from './schema';

/**
 * Generates a new Composed Metric Controller.
 */
const generateComposedMetricController: Generator<ComposedMetricControllerGeneratorSchema> = async (
    host: Tree,
    options: ComposedMetricControllerGeneratorSchema,
) => {
    const normalizedOptions = normalizeProjectGeneratorOptions(host, options);

    const nodeAppResult = await applicationGenerator(host, {
        name: options.name,
        directory: options.directory,
        tags: options.tags,
    });

    const installPkgsFn = addPolarisDependenciesToPackageJson(host, {
        [NPM_PACKAGES.polaris.orchestrators.kubernetes]: VERSIONS.polaris,
        [NPM_PACKAGES.polaris.queryBackends.prometheus]: VERSIONS.polaris,
    });

    const projectConfig = readProjectConfiguration(host, normalizedOptions.projectName);
    changeBuildDependencyBundling(projectConfig);
    addDockerBuildConfig(projectConfig, normalizedOptions);
    addDeployTarget(projectConfig, normalizedOptions);
    updateProjectConfiguration(host, normalizedOptions.projectName, projectConfig);

    addCommonWorkspaceRootFiles(host);
    addElasticityStrategyControllerFiles(host, normalizedOptions);
    await formatFiles(host);

    return runCallbacksSequentially(nodeAppResult, installPkgsFn);
};

export default generateComposedMetricController;

function addElasticityStrategyControllerFiles(host: Tree, options: ComposedMetricControllerGeneratorNormalizedSchema): void {
    const compMetricNames = getComposedMetricTypeNames(options.compMetricType);

    const templateOptions = {
        ...compMetricNames,
        compMetricTypePkg: options.compMetricTypePkg,
        initPolarisLibFn: POLARIS_INIT_LIB_FN_NAME,
        controllerProjectName: options.projectName,
        offsetFromRoot: offsetFromRoot(options.projectRoot),
        appsDir: options.appsDir,
        template: '',
    };
    generateFiles(host, path.join(__dirname, 'files/composed-metric-controller'), options.projectRoot, templateOptions);
    generateTypeScriptDockerfile(host, options);
}
