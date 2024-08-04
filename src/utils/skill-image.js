import * as adobeXd from '../asset/svg/skills/adobe-xd.svg';
import adobeaudition from '../asset/svg/skills/adobeaudition.svg';
import afterEffects from '../asset/svg/skills/after-effects.svg';
import angular from '../asset/svg/skills/angular.svg';
import aws from '../asset/svg/skills/aws.svg';
import azure from '../asset/svg/skills/azure.svg';
import blender from '../asset/svg/skills/blender.svg';
import bootstrap from '../asset/svg/skills/bootstrap.svg';
import bulma from '../asset/svg/skills/bulma.svg';
import c from '../asset/svg/skills/c.svg';
import canva from '../asset/svg/skills/canva.svg';
import capacitorjs from '../asset/svg/skills/capacitorjs.svg';
import coffeescript from '../asset/svg/skills/coffeescript.svg';
import cplusplus from '../asset/svg/skills/cplusplus.svg';
import csharp from '../asset/svg/skills/csharp.svg';
import css from '../asset/svg/skills/css.svg';
import dart from '../asset/svg/skills/dart.svg';
import deno from '../asset/svg/skills/deno.svg';
import django from '../asset/svg/skills/django.svg';
import docker from '../asset/svg/skills/docker.svg';
import fastify from '../asset/svg/skills/fastify.svg';
import figma from '../asset/svg/skills/figma.svg';
import firebase from '../asset/svg/skills/firebase.svg';
import flutter from '../asset/svg/skills/flutter.svg';
import gcp from '../asset/svg/skills/gcp.svg';
import gimp from '../asset/svg/skills/gimp.svg';
import git from '../asset/svg/skills/git.svg';
import go from '../asset/svg/skills/go.svg';
import graphql from '../asset/svg/skills/graphql.svg';
import haxe from '../asset/svg/skills/haxe.svg';
import html from '../asset/svg/skills/html.svg';
import illustrator from '../asset/svg/skills/illustrator.svg';
import ionic from '../asset/svg/skills/ionic.svg';
import java from '../asset/svg/skills/java.svg';
import javascript from '../asset/svg/skills/javascript.svg';
import julia from '../asset/svg/skills/julia.svg';
import kotlin from '../asset/svg/skills/kotlin.svg';
import lightroom from '../asset/svg/skills/lightroom.svg';
import markdown from '../asset/svg/skills/markdown.svg';
import materialui from '../asset/svg/skills/materialui.svg';
import matlab from '../asset/svg/skills/matlab.svg';
import memsql from '../asset/svg/skills/memsql.svg';
import microsoftoffice from '../asset/svg/skills/microsoftoffice.svg';
import mongoDB from '../asset/svg/skills/mongoDB.svg';
import mysql from '../asset/svg/skills/mysql.svg';
import nextJS from '../asset/svg/skills/nextJS.svg';
import nginx from '../asset/svg/skills/nginx.svg';
import numpy from '../asset/svg/skills/numpy.svg';
import nuxtJS from '../asset/svg/skills/nuxtJS.svg';
import opencv from '../asset/svg/skills/opencv.svg';
import photoshop from '../asset/svg/skills/photoshop.svg';
import php from '../asset/svg/skills/php.svg';
import picsart from '../asset/svg/skills/picsart.svg';
import postgresql from '../asset/svg/skills/postgresql.svg';
import premierepro from '../asset/svg/skills/premierepro.svg';
import python from '../asset/svg/skills/python.svg';
import pytorch from '../asset/svg/skills/pytorch.svg';
import react from '../asset/svg/skills/react.svg';
import ruby from '../asset/svg/skills/ruby.svg';
import selenium from '../asset/svg/skills/selenium.svg';
import sketch from '../asset/svg/skills/sketch.svg';
import strapi from '../asset/svg/skills/strapi.svg';
import svelte from '../asset/svg/skills/svelte.svg';
import swift from '../asset/svg/skills/swift.svg';
import tailwind from '../asset/svg/skills/tailwind.svg';
import tensorflow from '../asset/svg/skills/tensorflow.svg';
import typescript from '../asset/svg/skills/typescript.svg';
import unity from '../asset/svg/skills/unity.svg';
import vitejs from '../asset/svg/skills/vitejs.svg';
import vue from '../asset/svg/skills/vue.svg';
import vuetifyjs from '../asset/svg/skills/vuetifyjs.svg';
import webix from '../asset/svg/skills/webix.svg';
import wolframalpha from '../asset/svg/skills/wolframalpha.svg';
import wordpress from '../asset/svg/skills/wordpress.svg';


const skillsMap = {
  'gcp': gcp,
  'html': html,
  'photoshop': photoshop,
  'docker': docker,
  'illustrator': illustrator,
  'adobe xd': adobeXd,
  'after effects': afterEffects,
  'css': css,
  'angular': angular,
  'javascript': javascript,
  'next js': nextJS,
  'nuxt js': nuxtJS,
  'react': react,
  'svelte': svelte,
  'typescript': typescript,
  'vue': vue,
  'bootstrap': bootstrap,
  'bulma': bulma,
  'capacitorjs': capacitorjs,
  'coffeescript': coffeescript,
  'memsql': memsql,
  'mongodb': mongoDB,
  'mysql': mysql,
  'postgresql': postgresql,
  'tailwind': tailwind,
  'vitejs': vitejs,
  'vuetifyjs': vuetifyjs,
  'c': c,
  'c++': cplusplus,
  'c#': csharp,
  'dart': dart,
  'go': go,
  'java': java,
  'kotlin': kotlin,
  'julia': julia,
  'matlab': matlab,
  'php': php,
  'python': python,
  'ruby': ruby,
  'swift': swift,
  'adobe audition': adobeaudition,
  'aws': aws,
  'deno': deno,
  'django': django,
  'firebase': firebase,
  'gimp': gimp,
  'git': git,
  'graphql': graphql,
  'lightroom': lightroom,
  'materialui': materialui,
  'nginx': nginx,
  'numpy': numpy,
  'opencv': opencv,
  'premiere pro': premierepro,
  'pytorch': pytorch,
  'selenium': selenium,
  'strapi': strapi,
  'tensorflow': tensorflow,
  'webix': webix,
  'wordpress': wordpress,
  'azure': azure,
  'blender': blender,
  'fastify': fastify,
  'figma': figma,
  'flutter': flutter,
  'haxe': haxe,
  'ionic': ionic,
  'markdown': markdown,
  'microsoft office': microsoftoffice,
  'picsart': picsart,
  'sketch': sketch,
  'unity': unity,
  'wolframalpha': wolframalpha,
  'canva': canva
};

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  return skillsMap[skillID];
}
