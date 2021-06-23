
from django.db.models import Count, Prefetch, Q
from rest_framework import serializers
from rest_framework.serializers import ImageField
from .models import Item, Comment, Like, Tag
from user.models import CustomUser

class AuthorSerializer(serializers.ModelSerializer):
  avatar = ImageField(read_only=True)

  class Meta:
    model = CustomUser
    fields = ['id', 'username', 'avatar']

class AuthorListSerializer(serializers.ListSerializer):
  child = AuthorSerializer()

class CommentSerializer(serializers.ModelSerializer):
  author = AuthorSerializer()

  class Meta:
    model = Comment
    fields = ['id', 'body', 'created_at', 'author']

class CommentListSerializer(serializers.ListSerializer):
  child = CommentSerializer()

class LikeSerializer(serializers.ModelSerializer):
  user = AuthorSerializer()

  class Meta:
    model = Like
    fields = ['user']

class TagSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tag
    fields = ['id', 'name']

class TagListSerializer(serializers.ListSerializer):
  child = TagSerializer()

class ItemSerializer(serializers.ModelSerializer):
  image_thumbnail = ImageField(read_only=True)
  author = AuthorSerializer()
  comments = CommentListSerializer()
  comment__count = serializers.IntegerField(read_only=True)
  likes__count = serializers.IntegerField(read_only=True)
  current_islike = serializers.IntegerField(read_only=True)
  hasTags = TagListSerializer()

  class Meta:
    model = Item
    fields = ['id', 'title', 'body', 'created_at', 'author', 'image_thumbnail', 'comments', 'comment__count', 'likes__count', 'current_islike', 'hasTags']

class ItemListSerializer(serializers.ListSerializer):

  child = ItemSerializer()
