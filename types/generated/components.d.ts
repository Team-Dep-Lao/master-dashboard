import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonPTeamMember extends Schema.Component {
  collectionName: 'components_common_p_team_members';
  info: {
    displayName: 'P Team Member';
    description: '';
  };
  attributes: {
    thumbnail: Attribute.Media<'images' | 'videos'>;
    profile: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface CommonPSkillSection extends Schema.Component {
  collectionName: 'components_common_p_skill_sections';
  info: {
    displayName: 'P Skill Section';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['Frontend', 'Backend', 'Other']> &
      Attribute.Required &
      Attribute.DefaultTo<'Other'>;
  };
}

export interface CommonPProjectSection extends Schema.Component {
  collectionName: 'components_common_p_project_sections';
  info: {
    displayName: 'P Project Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    sub_title: Attribute.String;
    desc: Attribute.Text;
    gallery: Attribute.Media<'images' | 'videos', true>;
    link_demo: Attribute.String;
    link_code: Attribute.String;
  };
}

export interface CommonPContactSection extends Schema.Component {
  collectionName: 'components_common_p_contact_sections';
  info: {
    displayName: 'P Contact Section';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'>;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.p-team-member': CommonPTeamMember;
      'common.p-skill-section': CommonPSkillSection;
      'common.p-project-section': CommonPProjectSection;
      'common.p-contact-section': CommonPContactSection;
    }
  }
}
