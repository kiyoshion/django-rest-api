# Generated by Django 3.2.4 on 2021-06-10 02:09

from django.db import migrations
import imagekit.models.fields
import user.models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0007_alter_customuser_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='avatar',
            field=imagekit.models.fields.ProcessedImageField(blank=True, default='img/avatar.svg', null=True, upload_to=user.models.CustomUser.user_directory_path),
        ),
    ]
